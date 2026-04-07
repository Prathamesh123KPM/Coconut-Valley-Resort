import fs from 'fs';
import path from 'path';

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
                replaceInDir(fullPath);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // replace .jpg, .jpeg, .JPG
            content = content.replace(/\.jpg/g, '.webp')
                .replace(/\.JPG/g, '.webp')
                .replace(/\.jpeg/gi, '.webp');
            fs.writeFileSync(fullPath, content);
            console.log('Updated imports in ' + fullPath);
        }
    }
}

replaceInDir(process.cwd());
