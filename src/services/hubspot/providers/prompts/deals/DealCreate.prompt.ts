/* eslint-disable max-len */
import { Injectable } from '@nestjs/common';
import { Prompt } from '@rekog/mcp-nest';

@Injectable()
export default class DealCreatePrompt {
  @Prompt({
    name: 'deal-create-prompt',
    description: 'Use this prompt when the user intends to create a new deal.',
  })
  async process() {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `
              📖 Instructions:
              1. When creating a deal, call the 'hubspot-batch-create-objects' tool with the following parameters:
                - objectType: 'deals'
              2. If there is no 'stage' set, set the 'stage' field in the payload to 'appointmentscheduled' and set the 'closeAt' field to the current date plus 1 month.
              3. If a 'stage' is provided, you **must** use the 'deal-stage-prompt' to resolve the 'stage' and the 'closeAt' value.
            `,
          },
        },
      ],
    };
  }
}
