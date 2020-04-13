import React, { useState } from 'react';
import styled from 'styled-components';
import { PageHeader, Radio, Layout, Typography, Button } from 'antd';
import { QuestionContext, VacanciesContext } from './_data';
import 'antd/dist/antd.css';
import { VacancyInterface } from './_interfaces/vacancy.interface';

const { Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const { questions } = React.useContext(QuestionContext);
  const { vacancies } = React.useContext(VacanciesContext);
  const answersArray: { answerKey: string; userAnswerValue: boolean }[] = [];
  const answersArrayNormalized: string[] = [];
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleAnswer = (e: any, key: string) => {
    let previousAnswer = '';

    if (key !== previousAnswer) {
      answersArray.push({
        answerKey: key,
        userAnswerValue: e.target.value,
      });
      previousAnswer = key;
    } else {
      return;
    }

    if (answersArray.length === questions.length) {
      setAllQuestionsAnswered(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const determineVacancies = () => {
    console.log(answersArray);
    answersArray.map((answer) => {
      console.log('answer: ' + JSON.stringify(answer));
      if (
        answer.userAnswerValue === (vacancies[0] as VacancyInterface).vacancySkills.experience && //вот этот механизм неправильный
        answer.userAnswerValue === (vacancies[0] as VacancyInterface).vacancySkills.management
      ) {
        answersArrayNormalized.push(vacancies[0].vacancyTitle);
        console.log('подходит: ' + JSON.stringify(answersArrayNormalized));
      }
    });
    console.log(answersArrayNormalized);
  };

  return (
    <>
      <PageHeader
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        backIcon={false}
        title="Курсовая работа"
        subTitle="Никулин Дмитрий, группа 426 ИЦЭиИТ"
      />
      <Content style={{ padding: '24px', backgroundColor: '#e1e0df' }}>
        {questions.map((question) => (
          <QuestionCard key={question.questionText}>
            <Title level={4}>{question.questionText}</Title>
            <Radio.Group
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => handleAnswer(e, question.questionKey)}
            >
              <Radio value={true}>Да</Radio>
              <Radio value={false}>Нет</Radio>
            </Radio.Group>
          </QuestionCard>
        ))}
        <Button onClick={() => determineVacancies()}>
          Показать подходящие вакансии
        </Button>
      </Content>
    </>
  );
};

const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  background-color: #fff;
  padding: 24px;
  border-radius: 2px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default App;
