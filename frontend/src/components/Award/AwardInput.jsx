import React from "react";

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
      <div>
        {awardList &&
          awardList.map((award, idx) => (
            <div key={idx}>
              <form>
                <p>
                  <input
                    key={`${idx}-${award.name}`}
                    type="text"
                    name="name"
                    onChange={(e) => setAwardName(e.target.value)}
                    defaultValue={award.name}
                  />
                </p>
                <p>
                  <input
                    key={`${idx}-${award.description}`}
                    type="text"
                    name="description"
                    onChange={(e) => setAwardDescription(e.target.value)}
                    defaultValue={award.description}
                  />
                </p>
              </form>
              <hr />
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              name="name"
              onChange={(e) => setAwardName(e.target.value)}
              placeholder="수상 내역"
              required="required"
            />
          </p>
          <p>
            <input
              type="text"
              name="description"
              onChange={(e) => setAwardDescription(e.target.value)}
              placeholder="상세 내역"
              required="required"
            />
          </p>
          <button type="submit">저장</button>
        </form>
      </div>

      <button onClick={() => setIsToggle(true)}>돌아가기</button>
    </div>
  );
}
