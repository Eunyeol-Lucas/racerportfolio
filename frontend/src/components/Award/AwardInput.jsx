import React from "react";
import * as Main from '../Components'
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

export default function AwardInput({
  awardName,
  awardDescription,
  setAwardName,
  setAwardDescription,
  onSubmit,
  awardList,
  setIsToggle,
}) {
  return (
    <div>
      <h2>수상이력</h2>
      <div>
        {awardList &&
          awardList.map((award, idx) => (
            <div key={idx}>
              <form>
                <p>
                  <Main.UserInput
                    key={`${idx}-${award.name}`}
                    type="text"
                    name="name"
                    onChange={(e) => setAwardName(e.target.value)}
                    defaultValue={award.name}
                  />
                </p>
                <p>
                  <Main.UserInput
                    key={`${idx}-${award.description}`}
                    type="text"
                    name="description"
                    onChange={(e) => setAwardDescription(e.target.value)}
                    defaultValue={award.description}
                  />
                </p>
              </form>
              <Main.Hr />
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <Main.UserInput
              type="text"
              name="name"
              onChange={(e) => setAwardName(e.target.value)}
              placeholder="수상 내역"
              required="required"
            />
          </p>
          <p>
            <Main.UserInput
              type="text"
              name="description"
              onChange={(e) => setAwardDescription(e.target.value)}
              placeholder="상세 내역"
              required="required"
            />
          </p>
          <Main.TransButton type="submit"><BiSave /></Main.TransButton>
        </form>
      </div>

      <Main.TransButton onClick={() => setIsToggle(true)}><GiCancel /></Main.TransButton>
    </div>
  );
}

  