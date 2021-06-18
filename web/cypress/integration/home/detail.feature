Feature: Visualizar detalhes do curso

              Eu, como aluno da plataforma Estratégia
              Desejo visualizar os detalhes do curso
              Para compreender melhor o que sera abordado no curso

        Scenario: Visualizar detalhes
            Given que pesquiso pelo curso "PREVIC - Inglês - 2021 (Pré-Edital)"
             When visualizo os detalhes
             Then vejo o conteúdo do curso

        Scenario: Validar preço do curso
            Given pesquiso pelo curso "SEFAZ-CE (Auditor Fiscal - Tecnologia da Informação) Inglês - 2021 (Pós-Edital)" da professora "Ena Loiola"
              And vejo o preço em parcelar de "12x R$ 8,00"
             When acesso os detalhes devo ver o mesmo valor
              And a soma de todas as parcelas