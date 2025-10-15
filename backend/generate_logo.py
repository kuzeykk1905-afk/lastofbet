import asyncio
import base64
from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

async def generate_logo():
    # Initialize the image generator with Emergent Universal Key
    api_key = os.getenv('EMERGENT_LLM_KEY', 'sk-emergent-13786A03506401fDe3')
    image_gen = OpenAIImageGeneration(api_key=api_key)
    
    # Detailed prompt for The Last of Us inspired betting logo
    prompt = """Create a minimalist logo for a sports betting website called 'lastofbet'. 
    Design should blend post-apocalyptic aesthetic inspired by The Last of Us video game with modern digital branding.
    
    Style requirements:
    - Sleek, professional, sophisticated
    - Post-apocalyptic meets modern digital
    - Minimalist emblem suitable for app icon
    - Symbolizes strategy, risk, hope, and survival
    
    Color palette:
    - Moss green (#4A5A3C)
    - Rust orange (#A65C3A)
    - Charcoal gray (#2D2D2D)
    - Earth tones with subtle decay aesthetic
    
    Visual elements:
    - Subtle hints of nature reclaiming the world
    - Organic shapes meeting geometric design
    - Could incorporate: spore patterns, fractured surfaces, survival symbols
    - Sharp, angular typography for 'lastofbet'
    - NOT too gloomy - maintain professional betting platform feel
    
    Format:
    - Square format suitable for app icon and web logo
    - Clean edges, works on both light and dark backgrounds
    - High contrast, recognizable at small sizes"""
    
    print("🎨 Generating logo with OpenAI gpt-image-1...")
    print("⏱️  This may take up to 60 seconds...")
    
    try:
        # Generate the logo
        images = await image_gen.generate_images(
            prompt=prompt,
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            # Save as PNG
            output_path = Path("/app/frontend/public/logo.png")
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(output_path, "wb") as f:
                f.write(images[0])
            
            print(f"✅ Logo saved to: {output_path}")
            print(f"📦 Image size: {len(images[0]) / 1024:.2f} KB")
            
            # Also save to docs folder for GitHub Pages
            docs_path = Path("/app/docs/logo.png")
            with open(docs_path, "wb") as f:
                f.write(images[0])
            print(f"✅ Logo also saved to: {docs_path}")
            
            return str(output_path)
        else:
            print("❌ No image was generated")
            return None
            
    except Exception as e:
        print(f"❌ Error generating logo: {str(e)}")
        return None

if __name__ == "__main__":
    asyncio.run(generate_logo())
