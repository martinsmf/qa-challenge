Feature: Visualizar detalhes do curso

              Eu, como aluno da plataforma Estratégia
              Desejo visualizar os detalhes do curso
              Para compreender melhor o que sera abordado no curso

        # Scenario: Visualizar detalhes
        #     Given que pesquiso pelo curso "PREVIC - Inglês - 2021 (Pré-Edital)"
        #      When visualizo os detalhes "PREVIC - Inglês - 2021 (Pré-Edital)"
        #      Then vejo o conteúdo do curso

        Scenario: Validar preço do curso
            Given pesquiso pela professora "Ena Loiola"
             When acesso os detalhes do curso "SEFAZ-CE (Auditor Fiscal - Tecnologia da Informação) Inglês - 2021 (Pós-Edital)" no valor de "12x R$ 8,00"
             Then devo ver o preço '12x de R$ 8,00' nos detalhes