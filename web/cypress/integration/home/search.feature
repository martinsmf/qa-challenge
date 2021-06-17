Feature: Busca

              Eu, como aluno da plataforma Estratégia
              Desejo buscar cursos de forma mais ágil e específica
              Para facilitar a visualização de cursos do meu interesse

        # Scenario Outline: Buscar curso
        #     Given desejo adiquirir um curso na plataforma estratégia
        #      When ralizo a busca dos "<curos>" na aréas do meu interesse:
        #      Then devo ver alista de cursos diponiveis

        # Examples:
        #           | curos   |
        #           | Policia |
        #           | prf     |
        #           | PREVIC  |

        Scenario Outline: Busca pelos filtros preestabelecidos
            Given desejo adiquirir um curso na plataforma estratégia
             When seleciono o um dos "<filtro>" preestabelecidos
             Then devo ser direcionado para página referente a opção selecionada "<url>"
              And ver o titulo "<titulo>"

        Examples:
                  | filtro        | url               | titulo               |
                  | Por concurso  | cursos/concurso/  | Cursos por concurso  |
                  | Por professor | cursos/professor/ | Cursos por professor |
                  | Por matéria   | cursos/materia/   | Cursos por matéria   |
                  | Por região    | cursos/regiao/    | Cursos por região    |
                  | Ver todos     | cursos/           | Cursos online        |


        