import os
import json
import requests
from typing import Dict, List, Optional
import difflib
import subprocess

class CodeUpdater:
    def __init__(self, deepseek_path: str, project_path: str):
        self.deepseek_path = deepseek_path
        self.project_path = project_path
        self.api_url = "http://localhost:8000/v1/chat/completions"  # Default DeepSeek API endpoint

    def generate_code_changes(self, prompt: str) -> Dict:
        """Generate code changes using DeepSeek"""
        try:
            # Prepare the request payload
            payload = {
                "model": "deepseek-coder",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a code assistant that helps update React projects. Provide specific code changes in a structured format."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0.7,
                "max_tokens": 2000
            }

            # Make request to local DeepSeek instance
            response = requests.post(self.api_url, json=payload)
            response.raise_for_status()
            
            return response.json()
        except Exception as e:
            print(f"Error generating code changes: {str(e)}")
            return None

    def parse_code_changes(self, response: Dict) -> List[Dict]:
        """Parse the response from DeepSeek into structured code changes"""
        try:
            content = response['choices'][0]['message']['content']
            # Parse the content into structured changes
            # This is a simplified version - you might need to adjust based on DeepSeek's output format
            changes = []
            
            # Split the content into file changes
            file_changes = content.split("---")
            for change in file_changes:
                if not change.strip():
                    continue
                
                # Extract file path and changes
                lines = change.strip().split('\n')
                file_path = lines[0].strip()
                code_changes = '\n'.join(lines[1:])
                
                changes.append({
                    'file_path': file_path,
                    'changes': code_changes
                })
            
            return changes
        except Exception as e:
            print(f"Error parsing code changes: {str(e)}")
            return []

    def apply_changes(self, changes: List[Dict]) -> bool:
        """Apply the generated changes to the project files"""
        try:
            for change in changes:
                file_path = os.path.join(self.project_path, change['file_path'])
                
                # Create directory if it doesn't exist
                os.makedirs(os.path.dirname(file_path), exist_ok=True)
                
                # Write changes to file
                with open(file_path, 'w') as f:
                    f.write(change['changes'])
                
                print(f"Updated {file_path}")
            
            return True
        except Exception as e:
            print(f"Error applying changes: {str(e)}")
            return False

    def update_code(self, prompt: str) -> bool:
        """Main method to update code based on prompt"""
        # Generate code changes
        response = self.generate_code_changes(prompt)
        if not response:
            return False
        
        # Parse changes
        changes = self.parse_code_changes(response)
        if not changes:
            return False
        
        # Apply changes
        return self.apply_changes(changes)

def main():
    # Configuration
    deepseek_path = "/path/to/your/deepseek"  # Update this with your DeepSeek path
    project_path = os.getcwd()  # Current directory as project path
    
    # Initialize updater
    updater = CodeUpdater(deepseek_path, project_path)
    
    # Get prompt from user
    prompt = input("Enter your prompt for code changes: ")
    
    # Update code
    success = updater.update_code(prompt)
    
    if success:
        print("Code updated successfully!")
    else:
        print("Failed to update code.")

if __name__ == "__main__":
    main() 