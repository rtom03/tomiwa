import { useState } from "react";
import { initialTravelPlan } from "../constants/index.js";
import type { PlaceTreeProps } from "../constants/_index.js";

function TravelPlanComponent() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId: number, childId: number) {
    const parent = plan[parentId];

    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "24px",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "16px",
          marginTop: 0,
          color: "#1a1a1a",
        }}
      >
        Places to visit
      </h2>
      <ol
        style={{
          paddingLeft: "20px",
          margin: 0,
        }}
      >
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </div>
  );
}

function PlaceTree({ id, parentId, placesById, onComplete }: PlaceTreeProps) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li style={{ marginBottom: "8px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: childIds.length > 0 ? "8px" : 0,
        }}
      >
        <span style={{ fontSize: "15px", color: "#1a1a1a" }}>
          {place.title}
        </span>
        <button
          onClick={() => onComplete(parentId, id)}
          style={{
            padding: "3px 10px",
            fontSize: "13px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            backgroundColor: "white",
            cursor: "pointer",
            fontWeight: "500",
            color: "#374151",
          }}
        >
          Complete
        </button>
      </div>
      {childIds.length > 0 && (
        <ol style={{ paddingLeft: "20px", margin: 0 }}>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

// Code display component
// const codeString = `export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds
//         .filter(id => id !== childId)
//     };
//     // Update the root state object...
//     setPlan({
//       ...plan,
//       // ...so that it has an updated version
//       [parentId]: nextParent
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }`;

export default function Codex() {
  const [activeTab, setActiveTab] = useState<"app" | "places">("app");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        fontFamily: "monospace",
        color: "#d4d4d4",
      }}
    >
      {/* Code Panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid #3e3e3e",
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#252526",
            borderBottom: "1px solid #3e3e3e",
            gap: "2px",
          }}
        >
          <button
            onClick={() => setActiveTab("app")}
            style={{
              padding: "10px 16px",
              backgroundColor: activeTab === "app" ? "#1e1e1e" : "transparent",
              border: "none",
              color: activeTab === "app" ? "#4fc3f7" : "#999",
              cursor: "pointer",
              fontSize: "13px",
              borderBottom: activeTab === "app" ? "1px solid #4fc3f7" : "none",
            }}
          >
            Codex.js
          </button>
          <button
            onClick={() => setActiveTab("places")}
            style={{
              padding: "10px 16px",
              backgroundColor:
                activeTab === "places" ? "#1e1e1e" : "transparent",
              border: "none",
              color: activeTab === "places" ? "#4fc3f7" : "#999",
              cursor: "pointer",
              fontSize: "13px",
              borderBottom:
                activeTab === "places" ? "1px solid #4fc3f7" : "none",
            }}
          >
            places.js
          </button>
        </div>

        {/* Code Content */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
            <code>
              <div style={{ color: "#569cd6" }}>
                export default function{" "}
                <span style={{ color: "#dcdcaa" }}>TravelPlan</span>() {"{"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>const</span> [plan, setPlan]
                = <span style={{ color: "#dcdcaa" }}>useState</span>
                (initialTravelPlan);
              </div>
              <div></div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>function</span>{" "}
                <span style={{ color: "#dcdcaa" }}>handleComplete</span>(
                <span style={{ color: "#9cdcfe" }}>parentId</span>,{" "}
                <span style={{ color: "#9cdcfe" }}>childId</span>) {"{"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>const</span>{" "}
                <span style={{ color: "#4fc3f7" }}>parent</span> =
                plan[parentId];
              </div>
              <div style={{ color: "#6a9955" }}>
                {" "}
                // Create a new version of the parent place
              </div>
              <div style={{ color: "#6a9955" }}>
                {" "}
                // that doesn't include this child ID.
              </div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>const</span>{" "}
                <span style={{ color: "#4fc3f7" }}>nextParent</span> = {"{"}
              </div>
              <div>
                {" "}
                ...<span style={{ color: "#9cdcfe" }}>parent</span>,
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>childIds</span>:
                parent.childIds
              </div>
              <div>
                {" "}
                .<span style={{ color: "#dcdcaa" }}>filter</span>(
                <span style={{ color: "#9cdcfe" }}>id</span> id !== childId)
              </div>
              <div> {"}"};</div>
              <div style={{ color: "#6a9955" }}>
                {" "}
                // Update the root state object...
              </div>
              <div>
                {" "}
                <span style={{ color: "#dcdcaa" }}>setPlan</span>({"{"}
              </div>
              <div>
                {" "}
                ...<span style={{ color: "#9cdcfe" }}>plan</span>,
              </div>
              <div> [parentId]: nextParent</div>
              <div> {"}"});</div>
              <div> {"}"}</div>
              <div></div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>const</span>{" "}
                <span style={{ color: "#4fc3f7" }}>root</span> = plan[
                <span style={{ color: "#b5cea8" }}>0</span>];
              </div>
              <div>
                {" "}
                <span style={{ color: "#569cd6" }}>const</span>{" "}
                <span style={{ color: "#4fc3f7" }}>planetIds</span> =
                root.childIds;
              </div>
              <div>
                {" "}
                <span style={{ color: "#c586c0" }}>return</span>
              </div>
              <div> {"<>"}</div>
              <div>
                {" "}
                {"<"}
                <span style={{ color: "#4ec9b0" }}>h2</span>
                {">"}Places to visit{"</"}
                <span style={{ color: "#4ec9b0" }}>h2</span>
                {">"}
              </div>
              <div>
                {" "}
                {"<"}
                <span style={{ color: "#4ec9b0" }}>ol</span>
                {">"}
              </div>
              <div>
                {" "}
                {"{"}planetIds.<span style={{ color: "#dcdcaa" }}>map</span>
                <span style={{ color: "#9cdcfe" }}>id</span> (
              </div>
              <div>
                {" "}
                {"<"}
                <span style={{ color: "#4ec9b0" }}>PlaceTree</span>
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>key</span>={"{"}id{"}"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>id</span>={"{"}id{"}"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>parentId</span>={"{" + "0}"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>placesById</span>={"{"}plan
                {"}"}
              </div>
              <div>
                {" "}
                <span style={{ color: "#9cdcfe" }}>onComplete</span>={"{"}
                handleComplete{"}"}
              </div>
              <div> {"/>"}</div>
              <div> {"))}"}</div>
              <div>
                {" "}
                {"</"}
                <span style={{ color: "#4ec9b0" }}>ol</span>
                {">"}
              </div>
              <div> {"</>"}</div>
              <div> );</div>
              <div>{"}"}</div>
            </code>
          </pre>
        </div>
      </div>

      {/* Preview Panel */}
      <div
        style={{
          width: "450px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Preview Header */}
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "#2d2d2d",
            color: "#ccc",
            fontSize: "13px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #3e3e3e",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ccc",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              ↻ Reload
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ccc",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              ✕ Clear
            </button>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#ccc",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              ⎘ Fork
            </button>
          </div>
        </div>

        {/* Preview Content */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <TravelPlanComponent />
        </div>
      </div>
    </div>
  );
}
