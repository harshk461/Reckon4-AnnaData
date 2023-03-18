import React from 'react'
import './chatmessage.css'

export default function ChatMessage(props) {
    return (
        <div className="message-container ${props.classname}">
            <div className="message-box ${props.classname}">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 13C7.80222 13 7.60888 13.0586 7.44443 13.1685C7.27998 13.2784 7.15181 13.4346 7.07612 13.6173C7.00043 13.8 6.98063 14.0011 7.01921 14.1951C7.0578 14.3891 7.15304 14.5673 7.29289 14.7071C7.43275 14.847 7.61093 14.9422 7.80491 14.9808C7.99889 15.0194 8.19996 14.9996 8.38268 14.9239C8.56541 14.8482 8.72159 14.72 8.83147 14.5556C8.94135 14.3911 9 14.1978 9 14C9 13.7348 8.89464 13.4804 8.70711 13.2929C8.51957 13.1054 8.26522 13 8 13ZM1 12C0.734784 12 0.48043 12.1054 0.292893 12.2929C0.105357 12.4804 0 12.7348 0 13V15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16C1.26522 16 1.51957 15.8946 1.70711 15.7071C1.89464 15.5196 2 15.2652 2 15V13C2 12.7348 1.89464 12.4804 1.70711 12.2929C1.51957 12.1054 1.26522 12 1 12ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V15C20 15.2652 20.1054 15.5196 20.2929 15.7071C20.4804 15.8946 20.7348 16 21 16C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM16 5H12V3.72C12.3023 3.54549 12.5536 3.29491 12.7291 2.99317C12.9045 2.69143 12.9979 2.34903 13 2C13 1.46957 12.7893 0.960859 12.4142 0.585786C12.0391 0.210714 11.5304 0 11 0C10.4696 0 9.96086 0.210714 9.58579 0.585786C9.21071 0.960859 9 1.46957 9 2C9.00211 2.34903 9.09552 2.69143 9.27095 2.99317C9.44638 3.29491 9.69772 3.54549 10 3.72V5H6C5.20435 5 4.44129 5.31607 3.87868 5.87868C3.31607 6.44129 3 7.20435 3 8V17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20H16C16.7956 20 17.5587 19.6839 18.1213 19.1213C18.6839 18.5587 19 17.7956 19 17V8C19 7.20435 18.6839 6.44129 18.1213 5.87868C17.5587 5.31607 16.7956 5 16 5ZM12.72 7L12.22 9H9.78L9.28 7H12.72ZM17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H6C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7H7.22L8 10.24C8.05475 10.4619 8.18385 10.6583 8.36579 10.7966C8.54774 10.9349 8.77157 11.0067 9 11H13C13.2284 11.0067 13.4523 10.9349 13.6342 10.7966C13.8162 10.6583 13.9452 10.4619 14 10.24L14.78 7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V17ZM14 13C13.8022 13 13.6089 13.0586 13.4444 13.1685C13.28 13.2784 13.1518 13.4346 13.0761 13.6173C13.0004 13.8 12.9806 14.0011 13.0192 14.1951C13.0578 14.3891 13.153 14.5673 13.2929 14.7071C13.4327 14.847 13.6109 14.9422 13.8049 14.9808C13.9989 15.0194 14.2 14.9996 14.3827 14.9239C14.5654 14.8482 14.7216 14.72 14.8315 14.5556C14.9414 14.3911 15 14.1978 15 14C15 13.7348 14.8946 13.4804 14.7071 13.2929C14.5196 13.1054 14.2652 13 14 13Z" fill="#ffe074" />
                </svg>
                <div className="message-content ${props.classname}">
                    {props.message}
                </div>
            </div>
        </div>
    )
}
