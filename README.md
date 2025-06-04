# 🧪 Tabela Periódica Interativa com Cálculo de Carga Elétrica

Este projeto é uma **tabela periódica interativa** feita com HTML, CSS e JavaScript, que permite ao usuário visualizar os elementos químicos e também acessar duas ferramentas de cálculo em páginas externas:

- **Calculadora de Carga Elétrica Total**
- **Calculadora de Interação entre Cargas (Lei de Coulomb)**

---

## 🚀 Funcionalidades

- 🧠 Exibe uma tabela periódica com todos os elementos químicos.
- 📌 Ao interagir com um elemento, exibe informações detalhadas como:
  - Número atômico
  - Símbolo
  - Nome
  - Carga elétrica estimada (Q)
- 🔗 Integração com duas páginas externas:
  - **🧮 Calculadora de carga elétrica total**:  
    Permite inserir o número de elétrons para calcular a carga de um átomo:
    \[
    Q = n \cdot e \quad (e = 1.6 \times 10^{-19} \, C)
    \]
  - **⚡ Calculadora de interação entre cargas**:  
    Simula a força entre duas cargas elétricas, com base na **Lei de Coulomb**:
    \[
    F = k \cdot \frac{|q_1 \cdot q_2|}{r^2}
    \]
    Onde:
    - \( q_1, q_2 \) = valores das cargas
    - \( r \) = distância entre elas (em metros)
    - \( k = 9 \times 10^9 \, N\cdot m^2/C^2 \)

---

## 📂 Estrutura do Projeto

```plaintext
├── index.html                   # Tabela periódica interativa
├── carga-eletrica.html          # Página da calculadora de carga elétrica
├── interacao-cargas.html        # Página da calculadora de interação entre cargas
├── style.css
├── script.js
├── README.md
