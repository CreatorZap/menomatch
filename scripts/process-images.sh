#!/bin/bash

# Script para processar imagens do MenoMatch
# Requer: ImageMagick (brew install imagemagick)

echo "🎨 Processando imagens do MenoMatch..."

# Diretórios
PUBLIC_DIR="/Users/antonioedineutodesouza/Documents/MenoMatch/public"
ASSETS_DIR="/Users/antonioedineutodesouza/Documents/MenoMatch/src/assets"

# Criar diretório de assets se não existir
mkdir -p "$ASSETS_DIR"

# Verificar se ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick não está instalado!"
    echo "   Instale com: brew install imagemagick"
    echo ""
    echo "📝 INSTRUÇÕES MANUAIS:"
    echo "   1. Salve as imagens manualmente no diretório public/"
    echo "   2. og-image.jpg (1200x630)"
    echo "   3. logo512.png (512x512)"
    echo "   4. logo192.png (192x192)"
    echo "   5. favicon.ico (32x32)"
    exit 1
fi

# Função para redimensionar imagem
resize_image() {
    local input=$1
    local output=$2
    local size=$3
    
    if [ -f "$input" ]; then
        convert "$input" -resize "${size}x${size}" "$output"
        echo "✅ Criado: $output (${size}x${size})"
    else
        echo "❌ Arquivo não encontrado: $input"
    fi
}

# Instruções
echo ""
echo "📋 ANTES DE EXECUTAR:"
echo "   1. Salve IMAGE 2 (logo isolado) como: /tmp/logo-original.png"
echo "   2. Salve IMAGE 1 (og completo) como: /tmp/og-original.jpg"
echo "   3. Pressione ENTER para continuar ou CTRL+C para cancelar"
read

# Processar logo
if [ -f "/tmp/logo-original.png" ]; then
    echo ""
    echo "🎨 Processando logo..."
    
    # Logo 512x512
    resize_image "/tmp/logo-original.png" "$PUBLIC_DIR/logo512.png" 512
    
    # Logo 192x192
    resize_image "/tmp/logo-original.png" "$PUBLIC_DIR/logo192.png" 192
    
    # Favicon 32x32
    resize_image "/tmp/logo-original.png" "$PUBLIC_DIR/favicon.ico" 32
    
    echo "✅ Logos processados!"
else
    echo "❌ /tmp/logo-original.png não encontrado"
fi

# Processar OG image
if [ -f "/tmp/og-original.jpg" ]; then
    echo ""
    echo "🖼️  Processando OG image..."
    
    # Redimensionar para 1200x630 (Open Graph)
    convert "/tmp/og-original.jpg" -resize "1200x630^" -gravity center -extent 1200x630 "$PUBLIC_DIR/og-image.jpg"
    echo "✅ OG image criado: $PUBLIC_DIR/og-image.jpg"
else
    echo "❌ /tmp/og-original.jpg não encontrado"
fi

echo ""
echo "🎉 Processamento concluído!"
echo ""
echo "📁 Arquivos criados em: $PUBLIC_DIR"
ls -lh "$PUBLIC_DIR"/*.{png,jpg,ico} 2>/dev/null || echo "   (nenhum arquivo encontrado)"




