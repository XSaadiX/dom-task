// ============================================
// Advanced DOM Tasks
// ============================================

// ============================================
// Task 1: DOM Archaeologist
// ============================================

console.log("=== Task 1: DOM Archaeologist ===");//

// Starting from document.body, using only navigation properties
const body = document.body;

// 1. Tag name of the last element child of <main>
const mainElement = body.children[1]; // Second child element (after header)
const lastChildOfMain = mainElement.children[mainElement.children.length - 1];
console.log("1. Last element child of main:", lastChildOfMain.tagName); // "ASIDE"

// 2. Number of element children in <section>
const sectionElement = mainElement.children[0]; // First child of main
console.log(
  "2. Number of element children in section:",
  sectionElement.children.length
); // 2

// 3. Difference between childNodes and children of <section>
const childNodesCount = sectionElement.childNodes.length;
const childrenCount = sectionElement.children.length;
const difference = childNodesCount - childrenCount;
console.log("3. childNodes count:", childNodesCount);
console.log("3. children count:", childrenCount);
console.log("3. Difference:", difference);
console.log(
  "3. Explanation: childNodes includes text nodes (whitespace), children only includes element nodes"
);

// Additional investigations:
console.log("\n--- Additional Investigations ---");

// What is the nodeType and nodeName of the first node in document.body.childNodes?
const firstNode = body.childNodes[0];
console.log("First node in body.childNodes:");
console.log("- nodeType:", firstNode.nodeType); // 3 (TEXT_NODE)
console.log("- nodeName:", firstNode.nodeName); // "#text"

// Is the first paragraph a sibling of the second, or a descendant?
const firstParagraph = sectionElement.children[0];
const secondParagraph = sectionElement.children[1];
console.log("First paragraph parent:", firstParagraph.parentElement.tagName); // "SECTION"
console.log("Second paragraph parent:", secondParagraph.parentElement.tagName); // "SECTION"
console.log("Relationship: The paragraphs are siblings (same parent: section)");

// Find unexpected text nodes and explain their origin
console.log("\n--- Text Nodes Analysis ---");
function analyzeTextNodes(element, elementName) {
  console.log(`Text nodes in ${elementName}:`);
  for (let i = 0; i < element.childNodes.length; i++) {
    const node = element.childNodes[i];
    if (node.nodeType === 3) {
      // TEXT_NODE
      const text = node.textContent.trim();
      if (text === "") {
        console.log(
          `- Index ${i}: Empty text node (whitespace/newlines from HTML formatting)`
        );
      } else {
        console.log(`- Index ${i}: "${text}"`);
      }
    }
  }
}

analyzeTextNodes(body, "body");
analyzeTextNodes(mainElement, "main");
analyzeTextNodes(sectionElement, "section");

console.log(
  "Origin: Text nodes come from whitespace and newlines in HTML source code"
);

// ============================================
// Task 2: Synthetic DOM Injection
// ============================================

console.log("\n=== Task 2: Synthetic DOM Injection ===");

// Create the structure using only DOM methods (no innerHTML)
const cardDiv = document.createElement("div");
const h2Element = document.createElement("h2");
const pElement = document.createElement("p");

// Set attributes and content
cardDiv.className = "card";
cardDiv.setAttribute("data-role", "admin");

h2Element.textContent = "Access Panel";
pElement.textContent = "Authenticated";

// Build the structure
cardDiv.appendChild(h2Element);
cardDiv.appendChild(pElement);

// Append to document body
document.body.appendChild(cardDiv);

console.log("Card structure created and appended to body");

// Log the value of data-role as a JS property
console.log("data-role property value:", cardDiv.dataset.role); // "admin"

// Change paragraph text using property, not method
pElement.textContent = "Welcome back, Admin";
console.log("Paragraph text updated to:", pElement.textContent);

// Add two classes using classList
cardDiv.classList.add("authenticated");
cardDiv.classList.add("highlight");
console.log("Classes added. Current classList:", cardDiv.classList.toString());

// Challenge: Verify "card" exists and remove it while keeping others
const hasCardClass = cardDiv.classList.contains("card");
console.log("Contains 'card' class:", hasCardClass); // true

if (hasCardClass) {
  cardDiv.classList.remove("card");
  console.log(
    "Removed 'card' class. Current classList:",
    cardDiv.classList.toString()
  );
}

// Final verification
console.log("Final element classes:", cardDiv.className);
console.log("Final element structure:");
console.log("- Tag:", cardDiv.tagName);
console.log("- Classes:", cardDiv.classList.toString());
console.log("- Data-role:", cardDiv.dataset.role);
console.log("- H2 text:", cardDiv.children[0].textContent);
console.log("- P text:", cardDiv.children[1].textContent);

// ============================================
// Additional DOM Exploration
// ============================================

console.log("\n=== Additional DOM Exploration ===");

// Demonstrate different ways to access elements
console.log("Alternative navigation methods:");
console.log("- First element child:", body.firstElementChild.tagName); // "HEADER"
console.log("- Last element child:", body.lastElementChild.tagName); // "DIV" (our injected card)
console.log(
  "- Next sibling of header:",
  body.firstElementChild.nextElementSibling.tagName
); // "MAIN"

// Node type constants for reference
console.log("\nNode type constants:");
console.log("- ELEMENT_NODE:", Node.ELEMENT_NODE); // 1
console.log("- TEXT_NODE:", Node.TEXT_NODE); // 3
console.log("- COMMENT_NODE:", Node.COMMENT_NODE); // 8

// Demonstrate the difference between properties and attributes
console.log("\nProperty vs Attribute demonstration:");
cardDiv.id = "access-panel"; // Set via property
console.log("ID via property:", cardDiv.id);
console.log("ID via getAttribute:", cardDiv.getAttribute("id"));

cardDiv.setAttribute("title", "Admin Access Panel"); // Set via attribute
console.log("Title via property:", cardDiv.title);
console.log("Title via getAttribute:", cardDiv.getAttribute("title"));

// ============================================
// Summary and Best Practices
// ============================================

/*
Key Concepts Demonstrated:

1. DOM Navigation:
   - children vs childNodes (elements vs all nodes)
   - firstElementChild, lastElementChild, nextElementSibling
   - parentElement vs parentNode

2. Node Types:
   - ELEMENT_NODE (1) - HTML elements
   - TEXT_NODE (3) - text content and whitespace
   - Understanding why whitespace creates text nodes

3. DOM Creation:
   - createElement() for building elements
   - appendChild() for structure building
   - Setting properties vs attributes

4. Modern DOM APIs:
   - dataset for data-* attributes
   - classList for class manipulation
   - textContent vs innerHTML

5. Property vs Attribute:
   - Properties are live JavaScript values
   - Attributes are HTML source values
   - Some sync, some don't
*/

