Feature: Busca

              Eu, como aluno da plataforma Estratégia
              Desejo buscar cursos de forma mais ágil e específica
              Para facilitar a visualização de cursos do meu interesse

        Scenario Outline: Buscar curso
            Given desejo adiquirir um curso na plataforma estratégia
             When ralizo a busca dos "<curos>" na aréas do meu interesse:
             Then devo ver alista de cursos diponiveis

        Examples:
                  | curos   |
                  | Policia |
                  | prf     |
                  | PREVIC  |

        Scenario Outline: Busca pelos filtros pré-estabelcidos
            Given que desejo utilizar um dos filtros preestabelecidos
             When seleciono o "<filtro>"
             Then devo ser direcionado para página referente a opção selecionada "<url>"
              And ver o "<titulo>"

        Examples:
                  | filtro        | url                | titulo               |
                  | POR CONCURSO  | /cursos/concurso/  | Cursos por concurso  |
                  | POR PROFESSOR | /cursos/professor/ | Cursos por professor |
                  | POR MATÉRIA   | /cursos/materia/   | Cursos por matéria   |
                  | POR REGIÃO    | /cursos/regiao/    | Cursos por região    |
                  | VER TODOS     | /cursos/           | Cursos online        |


        