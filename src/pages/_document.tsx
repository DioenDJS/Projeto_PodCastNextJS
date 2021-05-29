import Document , {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                **
                No Head vamos adicinar as informaçoes padao de um arquivo html para 
                prover melhor acessibilidade e ajuda aos mecanismos de busca 
                *
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <main />

                    // o next injeta os scripts necessario para funcionar de forma automática
                    <NextScript />
                </body>
            </Html>
        )
    }

}