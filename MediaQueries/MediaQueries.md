# Guia de Media Queries em CSS

As media queries em CSS permitem aplicar estilos específicos com base em características do dispositivo ou da janela de visualização. Isso é essencial para criar designs responsivos que se ajustem a diferentes tamanhos de tela e preferências dos usuários. A seguir, você encontrará uma explicação detalhada dos parâmetros mais comuns que podem ser usados em media queries.

## Parâmetros Comuns de Media Queries

### 1. Largura e Altura da Janela de Visualização (Viewport)

- **`min-width` e `max-width`**: Define a largura mínima e máxima da janela de visualização.
  
  ```css
  @media (min-width: 768px) {
    /* Estilos para janelas de visualização com largura mínima de 768px */
  }
  ```

- **`min-height` e `max-height`**: Define a altura mínima e máxima da janela de visualização.
  
  ```css
  @media (min-height: 600px) {
    /* Estilos para janelas de visualização com altura mínima de 600px */
  }
  ```

### 2. Largura e Altura do Dispositivo

- **`device-width` e `device-height`**: Define a largura e altura do dispositivo, não da janela de visualização.

  ```css
  @media (device-width: 375px) {
    /* Estilos para dispositivos com largura de 375px */
  }
  ```

### 3. Orientação

- **`orientation`**: Aplica estilos com base na orientação do dispositivo (retrato ou paisagem).

  ```css
  @media (orientation: landscape) {
    /* Estilos para orientação paisagem */
  }

  @media (orientation: portrait) {
    /* Estilos para orientação retrato */
  }
  ```

### 4. Resolução

- **`resolution`**: Define a resolução do dispositivo, comumente usada para diferenciar entre telas padrão e de alta resolução (como telas Retina).

  ```css
  @media (resolution: 2dppx) {
    /* Estilos para dispositivos com uma resolução de 2dppx */
  }
  ```

### 5. Proporção da Tela

- **`aspect-ratio`**: Define a proporção entre largura e altura da janela de visualização ou do dispositivo.

  ```css
  @media (aspect-ratio: 16/9) {
    /* Estilos para dispositivos com uma proporção de 16:9 */
  }
  ```

### 6. Preferência de Mídia

- **`prefers-color-scheme`**: Detecta se o usuário prefere um esquema de cores claro ou escuro.

  ```css
  @media (prefers-color-scheme: dark) {
    /* Estilos para usuários que preferem modo escuro */
  }

  @media (prefers-color-scheme: light) {
    /* Estilos para usuários que preferem modo claro */
  }
  ```

- **`prefers-reduced-motion`**: Detecta se o usuário prefere reduzir movimentos animados e transições.

  ```css
  @media (prefers-reduced-motion: reduce) {
    /* Estilos para usuários que preferem menos movimento */
  }
  ```

## Combinando Parâmetros

Você pode combinar múltiplos parâmetros para criar regras de estilo mais complexas e específicas:

```css
@media (min-width: 768px) and (orientation: landscape) {
  /* Estilos para janelas de visualização com largura mínima de 768px e orientação paisagem */
}
```

## Conclusão

As media queries são uma ferramenta poderosa para garantir que seu design web seja responsivo e ofereça uma boa experiência de usuário em uma variedade de dispositivos e preferências. Usar esses parâmetros corretamente permite adaptar seu conteúdo às diferentes condições de visualização.

Se você tiver mais perguntas ou precisar de exemplos adicionais, sinta-se à vontade para explorar a documentação oficial do CSS ou entrar em contato com a comunidade de desenvolvedores!

