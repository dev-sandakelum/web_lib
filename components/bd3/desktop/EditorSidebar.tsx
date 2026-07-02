"use client";

import { Palette, User, Camera, MessageSquare, Lock, Stars } from "lucide-react";
import { TemplatePanel }  from "../panels/TemplatePanel";
import { PersonPanel }    from "../panels/PersonPanel";
import { PhotoPanel }     from "../panels/PhotoPanel";
import { MessagePanel }   from "../panels/MessagePanel";
import { AccessPanel }    from "../panels/AccessPanel";
import { AiPostPanel }    from "../panels/AiPostPanel";
import type { FormData3, ImageTransform3 } from "../types";

interface Props {
  form: FormData3;
  setForm: React.Dispatch<React.SetStateAction<FormData3>>;
  set: (field: keyof FormData3, value: string | null | boolean) => void;
  accessInput: string;
  fileRef: React.RefObject<HTMLInputElement>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReEdit: () => void;
  isRefreshing: boolean;
  refreshAttempt: number;
  refreshMaxAttempts: number;
  refreshMatched: boolean | null;
  onRefreshMsg: () => void;
  isMsgGen: boolean;
  generatedMsg: string;
  msgCopied: boolean;
  onGenerateMsg: () => void;
  onCopyMsg: () => void;
  onAccessChange: (v: string) => void;
}

function SectionCard({
  title, icon, children, accent,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="bd3-section">
      <div className="bd3-section-header">
        <span className="bd3-section-icon" style={{ color: accent ?? "#8494FF" }}>{icon}</span>
        <span className="bd3-section-title">{title}</span>
      </div>
      <div className="bd3-section-body">{children}</div>
    </div>
  );
}

export function EditorSidebar(props: Props) {
  const { form, set, setForm, accessInput } = props;

  return (
    <aside className="bd3-editor">
      <div className="bd3-editor-scroll">
        <div className="bd3-editor-inner">

          <SectionCard title="Template" icon={<Palette size={13} />} accent="#8494FF">
            <TemplatePanel
              templateId={form.templateId}
              onSelect={(id) => set("templateId", id)}
            />
          </SectionCard>

          <SectionCard title="Person Details" icon={<User size={13} />} accent="#67e8f9">
            <PersonPanel form={form} set={set} setForm={setForm} />
          </SectionCard>

          <SectionCard title="Profile Photo" icon={<Camera size={13} />} accent="#f9a8d4">
            <PhotoPanel
              profileImage={form.profileImage}
              fileRef={props.fileRef}
              onFileChange={props.onFileChange}
              onReEdit={props.onReEdit}
            />
          </SectionCard>

          <SectionCard title="Birthday Message" icon={<MessageSquare size={13} />} accent="#86efac">
            <MessagePanel
              message={form.message}
              onChange={(v) => set("message", v)}
              isRefreshing={props.isRefreshing}
              refreshAttempt={props.refreshAttempt}
              refreshMaxAttempts={props.refreshMaxAttempts}
              refreshMatched={props.refreshMatched}
              onRefresh={props.onRefreshMsg}
            />
          </SectionCard>

          <SectionCard title="Access Key" icon={<Lock size={13} />} accent="#fcd34d">
            <AccessPanel
              accessInput={accessInput}
              accessGranted={form.access}
              onChange={props.onAccessChange}
            />
          </SectionCard>

          <SectionCard title="AI Social Post" icon={<Stars size={13} />} accent="#c4b5fd">
            <AiPostPanel
              generatedMsg={props.generatedMsg}
              isMsgGen={props.isMsgGen}
              msgCopied={props.msgCopied}
              onGenerate={props.onGenerateMsg}
              onCopy={props.onCopyMsg}
            />
          </SectionCard>

        </div>
      </div>
      {/* Action bar placeholder — download is in navbar on desktop */}
      <div className="bd3-action-bar" style={{ display: "none" }} />
    </aside>
  );
}
