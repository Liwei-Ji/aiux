//  Card data
const data = [
  {
    title: "Wayfinders",
    subtitle: "Give users clues about how to interact with the model, particularly when getting started.",
    icon: "fa-solid fa-map",
    features: [
      {
        title: "Follow up",
        subtitle: "Get more information from the user when the initial prompt isn't sufficiently clear",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ace3d8b486ec00160dfaae_followup_card.svg"
      },
      {
        title: "Initial CTA",
        subtitle: "Large, open-ended input inviting the user to start their first interaction with the AI",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acc398ef2d45e7fca831ba_cta_card.svg"
      },
       {
        title: "Nudges",
        subtitle: "Alert users to actions they can take to use AI, especially if they are just getting started",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acc6618b356cc505bac940_Nudge_card.svg"
      },
      {
        title: "Suggesions",
        subtitle: "Solves the blank canvas dilemma with clues for how to prompt",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ace576103ad564b4406d6d_suggestions_card.svg"
      },
      {
        title: "Templates",
        subtitle: "Structured templates that can be filled by the user or pre-filled by the AI",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ace652459c4533e7d88e3e_template_card.svg"
      }
    ]
  },
  {
    title: "Inputs",
    subtitle: "Submit the user's prompt to the AI within its surrounding context",
    icon: "fa-solid fa-keyboard",
    features: [
      {
        title: "Auto fill",
        subtitle: "Makes it easy for users to extend a prompt to multiple inputs at once",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf3b81d4f4f54c245396b_autofill_card.svg"
      },
      {
        title: "Inline Action",
        subtitle: "Ask or interact with AI contextually based on something already available on the page",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf45e3f1431ad0c44551a_inlineaction_card.svg"
      },
      {
        title: "Madlibs",
        subtitle: "Repeatedly run generative tasks without compromising on the format or accuracy",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf60ad26fd9febbe28ffc_madlibs_card.svg"
      },
      {
        title: "Open text",
        subtitle: "Open ended prompt inputs that can be used in AI conversations and other natural language prompting",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf789178baa4e2e9e9aab_openinput_card.svg"
      },
      {
        title: "Remix",
        subtitle: "Use existing content as the starting point for prompting",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b5b84cee9245c03c296be6_remix_card.svg"
      },
      {
        title: "Restyle",
        subtitle: "Transfer styles without changing the underlying structure of a generation",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b35f00d5707febd832b3ca_restyle_card.svg"
      },
      {
        title: "Summary",
        subtitle: "Have AI distill a topic or resource down to its essence",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf919f39d0154b592c46e_summary_card.svg"
      },
      {
        title: "Synthesis",
        subtitle: "Distill or reorganize complicated information into simple structure",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68acf9d7f5349d41aa54b92b_synthesize_card.svg"
      },
      {
        title: "Token layering",
        subtitle: "Construct a prompt with raw tokens, just like building with legos",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b371846133444d3059a978_tokenlayering_card.svg"
      },
      {
        title: "Transform",
        subtitle: "Use AI to change the modality of content",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b35ec8b17834050ebc98e5_transform_card.svg"
      }
    ]
  },
  {
    title: "Tuners",
    subtitle: "Let users refine or remix their prompt to get improved results",
    icon: "fa-solid fa-filter",
    features: [
      {
        title: "Attachments",
        subtitle: "Give the AI a specific reference to anchor its response",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad1b90f5349d41aa5ae38a_attachments_card.svg"
      },
      {
        title: "Filters",
        subtitle: "Constrain the inputs or the outputs of the AI by source, type, modality, etc",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad07d23eec6f119675d709_filters_card.svg"
      },
      {
        title: "Inpainting",
        subtitle: "Target specific areas of the AI's result to regenerate or remix",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad10e7000b95f2b577f9fb_inpainting_card.svg"
      },
      {
        title: "Model management",
        subtitle: "Let users specify what model to use for their prompts",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad1231271efefc27673d31_modelmanagement_card.svg"
      },
      {
        title: "Parameters",
        subtitle: "Include constraints with your prompt for the AI to reference when generating its result",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad155b9b8d80f64aebee1e_parameters_card.svg"
      },
      {
        title: "Personal voice",
        subtitle: "Ensure outputs match your voice, tone, and preferences in a consistent way",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad15f5719956709202c6e2_personalovoice_card.svg"
      },
      {
        title: "References",
        subtitle: "See and manage what additional sources the AI references to generate its response",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad1cf4e65278d06e72d111_references_card.svg"
      },
      {
        title: "Workflows",
        subtitle: "String generative steps together to synthesize, create, or send content on auto-pilot",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad1fe8e715687380252c4e_workflows_card.svg"
      }
    ]
  },
  {
    title: "Governors",
    subtitle: "Maintain user agency as the AI works in order to understand and direct the AI's logic",
    icon: "fa-solid fa-wand-magic-sparkles",
    features: [
      {
        title: "Citations",
        subtitle: "Give the AI a specific reference to anchor its response",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac7be5d23c1be315c14fc4_citation_card.svg"
      },
      {
        title: "Controls",
        subtitle: "Manage the flow of information or pause a request mid-stream to adjust the prompt",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac7ee1bea66470b3c8339e_controls_card.svg"
      },
      {
        title: "Footprints",
        subtitle: "Let users trace the AI's steps from prompt to result",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac832f83a5ddd9aab906d3_footprints_card.svg"
      },
      {
        title: "Plan of Action",
        subtitle: "Have the AI show the steps it will take to respond to the user's prompt before it executes its response",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac95a1b099d421f1be4c78_planofaction_card.svg"
      },
      {
        title: "Prompt transparency",
        subtitle: "Show users what is actually happening behind the scenes",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac6c5a16f4eb679b0dbc5f_prompttransparency_card.svg"
      },
      {
        title: "Regenerate",
        subtitle: "Have the AI reproduce its response to the prompt without additional input",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac864d563bf2b258221d00_regenerate_card.svg"
      },
      {
        title: "Sample response",
        subtitle: "Confirm the user's intent for complicated prompts",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac90cc404c75f50377f40f_sampleresponse_card.svg"
      },
      {
        title: "Token Transparency",
        subtitle: "Reveal the tokens the AI used to craft its response",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac5fc7c03253880a417461_tokentransparency_card.svg"
      },
      {
        title: "Variations",
        subtitle: "Trace through multiple variations of a result to choose the one that works best for them",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ac9935f14f97dac35b004c_variations_card.svg"
      }
    ]
  },
  {
    title: "Trust builder",
    subtitle: "Give users confidence that the AI's results are ethical, accurate, and trustworthy",
    icon: "fa-solid fa-shield-halved",
    features: [
      {
        title: "Consent",
        subtitle: "Only capture data from others with their knowledge and permission",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b617c289680bc8e194b949_consent_card.svg"
      },
      {
        title: "Watermark",
        subtitle: "Identifiers on AI Generative content that humans, software, or programs can read",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad3102cabb29e3abc06f3d_watermarks_card.svg"
      },
      {
        title: "Memory",
        subtitle: "Control what details the AI knows about you",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad2e956ec69fa4ae8385c2_memory_card.svg"
      },
      {
        title: "Interact with the AI without leaving any traces",
        subtitle: "Large, open-ended input inviting the user to start their first interaction with the AI",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad2dc30a9b0bee5768c764_incognito_card.svg"
      }
    ]
  },
  {
    title: "Dark matter",
    subtitle: "Potentially nefarious, but certainly ambiguous patterns that impact user trust with questionable user value",
    icon: "fa-solid fa-virus",
    features: [
      {
        title: "Caveat",
        subtitle: "Inform users about shortcomings or risks in the model or the technology overall",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad33551d4f4f54c24f6054_caveat_card.svg"
      },
      {
        title: "Rating",
        subtitle: "Signal expectation gaps or errors in the model – but is that clear to the user?",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/66550b496ae3ac9e19b0d9a2_p_rating.svg"
      },
      {
        title: "Data ownership",
        subtitle: "Control how the model remembers and uses your data",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68ad348d3ddb47cd6b8c56bd_dataownership_card.svg"
      }
    ]
  },
  {
    title: "Identifiers",
    subtitle: "Differentiate the AI from other features and highlight its use case",
    icon: "fa-solid fa-microchip",
    features: [
      {
        title: "Color",
        subtitle: "Visual cues to help users identify AI features or content",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b331d407f299d4789625e6_color_card.svg"
      },
      {
        title: "Disclosure",
        subtitle: "Clearly mark content and interactions guided or delivered by AI",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b3319ed0bdb1335b8f7c20_disclosure_card.svg"
      },
      {
        title: "Name",
        subtitle: "How do we refer to the AI?",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b331d407f299d4789625df_name_card.svg"
      },
      {
        title: "Personality",
        subtitle: "Characteristics that distinguish the AI's personality and vibe",
        img: "https://cdn.prod.website-files.com/65db6dd21591364dfcb8ae36/68b3319fd0bdb1335b8f7c35_personality_card.svg"   
      }
    ]
  }
];

// 渲染函數
function renderCards(containerId, data) {
  const container = document.getElementById(containerId);
   const toc = document.getElementById("toc");

  container.innerHTML = data.map((group, index) => {
    const groupId = `group-${index}`;
    return `
      <div id="${groupId}" class="card" role="button" tabindex="0" aria-label="${group.title}">
        <i class="${group.icon}" aria-hidden="true"></i>
        <div class="card-content">
          <div class="card-title">${group.title}</div>
          <div class="card-subtitle">${group.subtitle}</div>
        </div>
      </div>
      ${group.features && group.features.length ? `
        <div class="short-cards" role="list" aria-label="${group.title} features">
          ${group.features.map(f => `
            <div class="card short" role="button" tabindex="0" aria-label="${f.title}">
              <div class="card-content">
                <img src="${f.img}" alt="${f.title} icon" class="card-icon" />
                <div class="card-title">${f.title}</div>
                <div class="card-subtitle">${f.subtitle}</div>
              </div>
            </div>
          `).join("")}
        </div>
      ` : ""}
    `;
  }).join("");

  // 建立目錄
  toc.innerHTML = data.map((group, index) => {
    const groupId = `group-${index}`;
    return `<a href="#${groupId}"><i class="${group.icon}"></i> ${group.title}</a>`;
  }).join("");
}

// 執行渲染
renderCards("card-container", data);
