import React from "react";

export const ListSection = ({ title, listItems, strong, listStrongItems, bottomString }) => {
  return (
    <div class="framed-box">
      <div class="framed-box-wrap">
        <div class="pricing-title">
          <h3>{ title }</h3>
        </div>
        <div class="pricing-text-list">
          <ul class="list1">
            {listItems.map((item, index) => (
              <li key={index}>
                { strong && (
                  <>
                    <strong>
                      <em class="fa fa-chevron-circle-right">&nbsp;</em>
                      { listStrongItems[index]}
                    </strong>
                    { item }
                  </>
                )}
                { !strong && (
                  <>
                    <em class="fa fa-chevron-circle-right">&nbsp;</em>
                    {item}
                  </>
                )}
              </li>
            ))}
          </ul>
          { bottomString }
        </div>
      </div>
    </div>
  )
}

ListSection.defaultProps = {
  string: false,
  listStrongItems: []
}