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

        // 3. Extrair dados do corpo (Agora recebe as strings com os Links do Cloudinary)
        const {
            categoria,
            p1_nome, p1_email, p1_telefone, p1_funcao, p1_nascimento, p1_ficheiro_url, p1_ficheiro, // Adicionei p1_ficheiro como segurança caso o frontend ainda mande com esse nome
            p2_nome, p2_email, p2_telefone, p2_funcao, p2_nascimento, p2_ficheiro_url, p2_ficheiro,
            termos_aceites
        } = body;

        // Fallback: se o link vier no nome antigo ou no novo
        const linkP1 = p1_ficheiro_url || p1_ficheiro;
        const linkP2 = p2_ficheiro_url || p2_ficheiro;

        // Formatação da Data Atual (ex: Thu, 6 Mar 2026 - 22:29)
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleString('en-GB', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Lisbon'
        }).replace(',', '');

        // 4. Construir o HTML do Email (Layout Simples e Limpo)
        const htmlBody = `
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #333; line-height: 1.4;">
            
            <p style="margin-bottom: 20px;"><strong>Data da Inscrição:</strong> ${dataFormatada}</p>
            
            <p><strong>Categoria</strong><br>${categoria || '-'}</p>
            <br>
            
            <p><strong>Participante nº1 Nome</strong><br>${p1_nome || '-'}</p>
            <p><strong>Data de Nascimento</strong><br>${p1_nascimento || '-'}</p>
            <p><strong>Email</strong><br>${p1_email || '-'}</p>
            <p><strong>Contacto Telefónico</strong><br>${p1_telefone || '-'}</p>
            <p><strong>Função/Empresa</strong><br>${p1_funcao || '-'}</p>
            <p><strong>CV Portfolio</strong><br>
               ${linkP1 && typeof linkP1 === 'string'
            ? `<a href="${linkP1}" target="_blank" style="color: #0056b3; text-decoration: underline;">https://younglionsportugal.mop.pt/system/files/webform/registry...</a>`
            : 'Não enviado'}
            </p>
            <br>
            
            <p><strong>Participante nº2 Nome</strong><br>${p2_nome || '-'}</p>
            <p><strong>Data de Nascimento</strong><br>${p2_nascimento || '-'}</p>
            <p><strong>Email</strong><br>${p2_email || '-'}</p>
            <p><strong>Contacto Telefónico</strong><br>${p2_telefone || '-'}</p>
            <p><strong>Função/Empresa</strong><br>${p2_funcao || '-'}</p>
            <p><strong>CV Portfolio</strong><br>
               ${linkP2 && typeof linkP2 === 'string'
            ? `<a href="${linkP2}" target="_blank" style="color: #0056b3; text-decoration: underline;">https://younglionsportugal.mop.pt/system/files/webform/registry...</a>`
            : 'Não enviado'}
            </p>
            <br>

            <p><strong>Lemos e concordamos com os termos estabelecidos no regulamento da categoria a que concorremos.</strong><br>${termos_aceites ? 'Yes' : 'No'}</p>

        </div>
        `;

        // 5. Enviar Email (Sem a secção de attachments)
        const data = await resend.emails.send({
            from: 'Inscrições <no-reply@younglionsportugal.mop.pt>',
            to: ['younglionsportugal@mop.pt'],
            reply_to: p1_email,
            subject: `Webform submission from: Inscrição (${categoria || 'Sem Categoria'})`,
            html: htmlBody
        });

        console.log("Email enviado com sucesso:", data);
        return res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Erro Crítico no Envio:", error);
        return res.status(500).json({ error: error.message });
    }
}