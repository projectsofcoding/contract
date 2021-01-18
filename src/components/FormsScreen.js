import React from "react";
import AttachmentE from "./forms/AttachmentE";
import AttachmentF from "./forms/AttachmentF";
import AttachmentH from "./forms/AttachmentH";
import AttachmentI from "./forms/AttachmentI";
import AttachmentM from "./forms/AttachmentM";
import AttachmentN from "./forms/AttachmentN";

import Form1 from "./forms/Form1";

function FormsScreen({ currentForm }) {
  const renderForm = () => {
    switch (currentForm) {
      case "attachmentD":
        return (
          <div>
            <Form1 />
          </div>
        );

        break;
      case "attachmentE":
        return (
          <div>
            <AttachmentE />
          </div>
        );

        break;
      case "attachmentF":
        return (
          <div>
            <AttachmentF />
          </div>
        );

        break;
        case "attachmentH":
            return (
              <div>
                <AttachmentH />
              </div>
            );
    
            break;
            case "attachmentI":
                return (
                  <div>
                    <AttachmentI />
                  </div>
                );
        
                break;
                case "attachmentM":
                    return (
                      <div>
                        <AttachmentM />
                      </div>
                    );
            
                    break;
    
                    case "attachmentN":
                    return (
                      <div>
                        <AttachmentN />
                      </div>
                    );
            
                    break;
    
      default:
        break;
    }
  };

  return <div>{renderForm()}</div>;
}

export default FormsScreen;
