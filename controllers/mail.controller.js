const nodemailer = require( 'nodemailer' );

exports.sendMail = async ( req, res ) => {
    const { to, subject, text, html } = req.body;

    try {
        const transporter = nodemailer.createTransport( {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        } );

        const mailOptions = {
            from: process.env.MAIL_FROM || 'noreply@example.com',
            to,
            subject,
            text,
            html
        };

        const info = await transporter.sendMail( mailOptions );

        return res.status( 200 ).json( {
            success: true,
            message: 'Email sent successfully!',
            info
        } );
    } catch ( error ) {
        console.error( 'Error sending email:', error );
        return res.status( 500 ).json( {
            success: false,
            message: 'Failed to send email',
            error: error.message
        } );
    }
};
