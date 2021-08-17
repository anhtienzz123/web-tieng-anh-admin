import { Image, Table } from "antd";
import Column from "antd/lib/table/Column";
import PropTypes from "prop-types";
import React from "react";
import ExamAction from "../ExamAction";
import QuestionAction from "../QuestionAction";

function QuestionTable(props) {
	const { setInitialValue, setIsModalVisible, questions, setIsDetailViewMode } =
		props;

	return (
		<Table
			dataSource={questions}
			pagination={false}
			scroll={{ y: 420 }}
			style={{ height: "490px" }}
		>
			<Column
				align="center"
				width="60px"
				title="STT"
				key="stt"
				render={(_, __, index) => <>{index + 1}</>}
			/>
			<Column
				title="Câu hỏi"
				dataIndex="content"
				key="content"
				render={(_, record) => {
					const content = record.content;
					const isImage = content.startsWith("http");
					return isImage ? <Image width={200} src={content} /> : <>{content}</>;
				}}
			/>
			<Column
				title="Đáp án"
				dataIndex="result"
				key="result"
				align="center"
				width="120px"
			/>
			<Column
				key="action"
				align="center"
				render={(_, record, index) => {
					return (
						<QuestionAction
							question={record}
							setInitialValue={setInitialValue}
							setIsModalVisible={setIsModalVisible}
							setIsDetailViewMode={setIsDetailViewMode}
						/>
					);
				}}
			/>
		</Table>
	);
}

QuestionTable.propTypes = {
	questions: PropTypes.array,
	setInitialValue: PropTypes.func,
	setIsModalVisible: PropTypes.func,
	setIsDetailViewMode: PropTypes.func,
};

QuestionTable.defaultProps = {
	questions: [],
	setInitialValue: null,
	setIsModalVisible: null,
	setIsDetailViewMode: null,
};

export default QuestionTable;
