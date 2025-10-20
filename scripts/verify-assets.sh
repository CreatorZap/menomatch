#!/bin/bash

# Script para verificar se todos os assets de imagem estão presentes

echo "🔍 Verificando assets do MenoMatch..."
echo ""

PUBLIC_DIR="/Users/antonioedineutodesouza/Documents/MenoMatch/public"

# Array de arquivos necessários
declare -A required_files=(
    ["$PUBLIC_DIR/og-image.jpg"]="Open Graph image (1200x630)"
    ["$PUBLIC_DIR/logo512.png"]="PWA Logo grande (512x512)"
    ["$PUBLIC_DIR/logo192.png"]="PWA Logo médio (192x192)"
    ["$PUBLIC_DIR/favicon.ico"]="Favicon (32x32)"
)

# Contadores
missing=0
found=0

# Verificar cada arquivo
for file in "${!required_files[@]}"; do
    desc="${required_files[$file]}"
    
    if [ -f "$file" ]; then
        size=$(du -h "$file" | cut -f1)
        echo "✅ FOUND: $desc"
        echo "   📁 $file ($size)"
        ((found++))
    else
        echo "❌ MISSING: $desc"
        echo "   📁 $file"
        ((missing++))
    fi
    echo ""
done

# Resumo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMO:"
echo "   ✅ Encontrados: $found"
echo "   ❌ Faltando: $missing"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $missing -eq 0 ]; then
    echo ""
    echo "🎉 PERFEITO! Todos os assets estão presentes!"
    echo "   Você pode fazer o deploy agora! 🚀"
    exit 0
else
    echo ""
    echo "⚠️  Ainda faltam $missing arquivo(s)."
    echo "   Siga as instruções no ASSETS_GUIDE.md"
    exit 1
fi




