const nome = prompt("Qual o seu nome?")

const boasVindas = prompt(`Olá ${nome}, você gostaria de jogar caminho dev comigo? [sim/nao]`)

    if (boasVindas === "sim"){
        alert("Legal! Vamos começar!")

        const escolha1 = prompt(`${nome}, você vai começar a se especializar em programação, qual caminho você escolhe: front-end ou back-end`)
            if (escolha1 === "front-end"){
                const escolha2 = prompt(`Dentro da especialização front-end, você gostaria de aprender react ou vue?`)
                    if (escolha2 === "react"){
                        alert("React é uma excelente escolha, parabéns!")
                    }
                    if (escolha2 === "vue"){
                        alert("Vue é uma ótima escolha, bora estudar!")
                    }
                    else{
                        alert("Você não escolheu, tente novamente!")
                    }
            }
            
            if(escolha1 === "back-end"){
                const escolha2 = prompt(`Dentro da especialização back-end, você gostaria de aprender c# ou java?`)
                    if (escolha2 === "c#"){
                        alert("C# é uma excelente escolha, parabéns!")
                    }
                    if (escolha2 === "java"){
                        alert("Java é uma ótima escolha, bora estudar!")
                    }
                    else{
                        alert("Você não escolheu, tente novamente!")
                    }
            }
        const escolha3 = prompt(`Agora uma pergunta importante ${nome}, você quer seguir sendo apenas ${escolha1}? Ou gostaria de ser fullstack?`)
            if (escolha3 === `${escolha1}`){
                alert("Massa! Você parece uma pessoa focada, parabéns!")
            }    
            if (escolha3 === "fullstack"){
                alert("Fullstack exige bastante preparação, boa sorte!")
            }
        
        alert(`Muito bem ${nome}, agora eu gostaria de saber quais tecnologias você quer aprender, vamos lá?`)    
        
        let escolha5 = "sim";
        while (escolha5 === "sim"){
            const escolha4 = prompt(`Qual tecnologia você gostaria de aprender?`)
            alert (`Que demais! ${escolha4} é uma excelente opção!`)
            
            const escolha5 = prompt(`Tem mais alguma tecnologia? [sim/não]`)
                if(escolha5 === "não"){
                    break;
                }   
        }

        alert (`Obrigada por jogar comigo, até a próxima! ;D`)

    }
    else{
        alert("Que pena! Uma próxima vez quem sabe?")
    }

