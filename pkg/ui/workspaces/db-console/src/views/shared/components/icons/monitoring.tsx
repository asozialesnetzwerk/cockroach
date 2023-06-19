// Copyright 2023 The Cockroach Authors.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.
import * as React from "react";

interface IconProps {
  className?: string;
}

export const MonitoringIcon = ({ className, ...props }: IconProps) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect
      opacity="0.15"
      x="9.26312"
      y="14.3362"
      width="34.5261"
      height="26.8908"
      fill="#7E89A9"
    />
    <path
      opacity="0.19"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.7122 26.3086C40.0622 26.6143 40.0977 27.1451 39.7914 27.4944L33.8967 34.2171C33.6401 34.5098 33.2157 34.5885 32.8708 34.4074L25.4543 30.5122L16.91 40.1044C16.619 40.4311 16.1256 40.4806 15.7752 40.2182L5.95069 32.8617C5.57869 32.5832 5.50341 32.0564 5.78254 31.6852C6.06167 31.314 6.58952 31.2389 6.96152 31.5174L16.1661 38.4098L24.6336 28.9038C24.8909 28.6149 25.3125 28.5384 25.6552 28.7184L33.067 32.6112L38.5239 26.3877C38.8302 26.0384 39.3622 26.003 39.7122 26.3086Z"
      fill="#7E89A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.73706 7.15506C6.73706 5.55286 8.04056 4.25208 9.64613 4.25208H43.4067C45.0123 4.25208 46.3158 5.55286 46.3158 7.15506V43.7479H6.73706V31.1429H5.05286V44.5882C5.05286 45.0523 5.42988 45.4286 5.89496 45.4286H47.1579C47.623 45.4286 48 45.0523 48 44.5882V7.15506C48 4.62465 45.9424 2.57141 43.4067 2.57141H9.64613C7.1104 2.57141 5.05286 4.62465 5.05286 7.15506V21.8992H6.73706V7.15506Z"
      fill="#7E89A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5543 9.21753C13.0193 9.21753 13.3964 9.59376 13.3964 10.0579V10.0766C13.3964 10.5407 13.0193 10.9169 12.5543 10.9169C12.0892 10.9169 11.7122 10.5407 11.7122 10.0766V10.0579C11.7122 9.59376 12.0892 9.21753 12.5543 9.21753Z"
      fill="#7E89A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.0576 9.21753C20.5226 9.21753 20.8997 9.59376 20.8997 10.0579V10.0766C20.8997 10.5407 20.5226 10.9169 20.0576 10.9169C19.5925 10.9169 19.2155 10.5407 19.2155 10.0766V10.0579C19.2155 9.59376 19.5925 9.21753 20.0576 9.21753Z"
      fill="#7E89A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5599 9.21753C28.025 9.21753 28.402 9.59376 28.402 10.0579V10.0766C28.402 10.5407 28.025 10.9169 27.5599 10.9169C27.0948 10.9169 26.7178 10.5407 26.7178 10.0766V10.0579C26.7178 9.59376 27.0948 9.21753 27.5599 9.21753Z"
      fill="#7E89A9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M39.7122 20.4263C40.0622 20.7319 40.0977 21.2628 39.7914 21.6121L33.8967 28.3348C33.6401 28.6275 33.2157 28.7062 32.8708 28.525L25.4543 24.6298L16.91 34.2221C16.619 34.5488 16.1256 34.5983 15.7752 34.3359L6.53441 27.4165L1.43695 32.493C1.10776 32.8209 0.574574 32.8203 0.246045 32.4918C-0.0824836 32.1633 -0.0819459 31.6312 0.247246 31.3034L5.86125 25.7125C6.1577 25.4172 6.62652 25.3843 6.96152 25.6351L16.1661 32.5274L24.6336 23.0215C24.8909 22.7326 25.3125 22.6561 25.6552 22.8361L33.067 26.7288L38.5239 20.5054C38.8302 20.1561 39.3622 20.1207 39.7122 20.4263Z"
      fill="#7E89A9"
    />
    <ellipse
      cx="39.5787"
      cy="20.2184"
      rx="2.5263"
      ry="2.52101"
      fill="#7E89A9"
    />
    <ellipse
      cx="39.5787"
      cy="20.2184"
      rx="0.842102"
      ry="0.840337"
      fill="white"
    />
    <ellipse
      cx="32.8419"
      cy="27.7815"
      rx="2.5263"
      ry="2.52101"
      fill="#7E89A9"
    />
    <ellipse cx="25.263" cy="23.58" rx="2.5263" ry="2.52101" fill="#7E89A9" />
    <ellipse
      cx="15.9999"
      cy="33.6638"
      rx="2.5263"
      ry="2.52101"
      fill="#7E89A9"
    />
    <ellipse
      cx="32.8419"
      cy="27.7814"
      rx="0.842101"
      ry="0.840335"
      fill="white"
    />
    <ellipse
      cx="25.263"
      cy="23.5798"
      rx="0.842101"
      ry="0.840336"
      fill="white"
    />
    <ellipse
      cx="15.9999"
      cy="33.6638"
      rx="0.842101"
      ry="0.840338"
      fill="white"
    />
  </svg>
);