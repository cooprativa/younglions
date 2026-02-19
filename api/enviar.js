import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // 1. Configurar CORS (Para o teu site poder falar com este servidor)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // 2. Garantir que o "body" é um Objeto e não texto
        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                console.error("Erro ao fazer parse do JSON:", e);
                return res.status(400).json({ error: 'JSON inválido' });
            }
        }

        console.log("Dados recebidos (sem ficheiros):", { ...body, p1_ficheiro: 'HIDDEN', p2_ficheiro: 'HIDDEN' });

        // 3. Extrair dados do corpo
        const {
            categoria,
            p1_nome, p1_email, p1_telefone, p1_funcao, p1_nascimento, p1_ficheiro,
            p2_nome, p2_email, p2_telefone, p2_funcao, p2_nascimento, p2_ficheiro,
            termos_aceites
        } = body;

        const attachments = [];

        // --- LÓGICA DE TRATAMENTO DE FICHEIROS ---

        // Função auxiliar para processar o anexo
        const processarAnexo = (fileData, prefixo) => {
            if (!fileData || !fileData.content || !fileData.name) return null;

            try {
                // O frontend manda "data:application/pdf;base64,JVBER..."
                // Nós precisamos apenas da parte "JVBER..." (depois da vírgula)
                const base64Data = fileData.content.includes(',')
                    ? fileData.content.split(',')[1]
                    : fileData.content;

                return {
                    filename: `${prefixo}_${fileData.name.replace(/\s+/g, '_')}`, // Remove espaços do nome
                    content: Buffer.from(base64Data, 'base64'),
                };
            } catch (error) {
                console.error(`Erro ao processar ficheiro ${prefixo}:`, error);
                return null;
            }
        };

        // Processar P1
        if (p1_ficheiro) {
            const anexo1 = processarAnexo(p1_ficheiro, "P1");
            if (anexo1) attachments.push(anexo1);
        }

        // Processar P2
        if (p2_ficheiro) {
            const anexo2 = processarAnexo(p2_ficheiro, "P2");
            if (anexo2) attachments.push(anexo2);
        }

        // 4. Construir o HTML do Email
        const htmlBody = `
      <div style="font-family: monospace; color: #000;">
        <h1 style="background: #FFCD00; padding: 10px;">Nova Inscrição: ${categoria || 'Sem Categoria'}</h1>
        
        <div style="border: 2px solid #000; padding: 15px; margin-bottom: 20px;">
            <h2>👤 Participante 1</h2>
            <ul style="list-style: none; padding: 0;">
                <li><strong>Nome:</strong> ${p1_nome || '-'}</li>
                <li><strong>Email:</strong> ${p1_email || '-'}</li>
                <li><strong>Telefone:</strong> ${p1_telefone || '-'}</li>
                <li><strong>Data Nasc.:</strong> ${p1_nascimento || '-'}</li>
                <li><strong>Função:</strong> ${p1_funcao || '-'}</li>
            </ul>
        </div>

        <div style="border: 2px solid #000; padding: 15px; margin-bottom: 20px;">
            <h2>👤 Participante 2</h2>
            <ul style="list-style: none; padding: 0;">
                <li><strong>Nome:</strong> ${p2_nome || '-'}</li>
                <li><strong>Email:</strong> ${p2_email || '-'}</li>
                <li><strong>Telefone:</strong> ${p2_telefone || '-'}</li>
                <li><strong>Data Nasc.:</strong> ${p2_nascimento || '-'}</li>
                <li><strong>Função:</strong> ${p2_funcao || '-'}</li>
            </ul>
        </div>

        <p><strong>Termos Aceites:</strong> ${termos_aceites ? 'SIM' : 'NÃO'}</p>
        <hr>
        <p style="font-size: 10px; color: #666;">Enviado via Website Young Lions Portugal</p>
      </div>
    `;

        // 5. Enviar Email
        const data = await resend.emails.send({
            from: 'Inscrições Young Lions <no-reply@younglionsportugal.mop.pt>',
            to: ['younglionsportugal@mop.pt'],
            reply_to: p1_email,
            subject: `Inscrição Young Lions 2026 - ${categoria}`,
            html: htmlBody,
            attachments: attachments
        });

        console.log("Email enviado com sucesso:", data);
        return res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Erro Crítico no Envio:", error);
        return res.status(500).json({ error: error.message });
    }
}