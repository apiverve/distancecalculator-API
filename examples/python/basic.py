"""
Distance Calculator API - Basic Usage Example

This example demonstrates the basic usage of the Distance Calculator API.
API Documentation: https://docs.apiverve.com/ref/distancecalculator
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/distancecalculator'

def call_distancecalculator_api():
    """
    Make a GET request to the Distance Calculator API
    """
    try:
        # Query parameters
        params &#x3D; {&#x27;lat1&#x27;: 36.7783, &#x27;lon1&#x27;: -119.4179, &#x27;lat2&#x27;: 34.0522, &#x27;lon2&#x27;: -118.2437}

        headers = {
            'x-api-key': API_KEY
        }

        response = requests.get(API_URL, headers=headers, params=params)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling Distance Calculator API...\n')

    result = call_distancecalculator_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
