import re

with open('src/pages/index.astro', 'r') as f:
    content = f.read()

content = content.replace('---\nimport "../styles/global.css";\n---\nimport "../styles/global.css";', '---\nimport "../styles/global.css";\n---')

with open('src/pages/index.astro', 'w') as f:
    f.write(content)
