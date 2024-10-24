import {
  ButtonsContainer, IconsContaienr,
  SendBlackButton,
  SendDragItem,
  SendHomeWorkContainer,
  SendHomeWorkContent,
  SendHomeWorkLeft,
  SendHomeWorkRight,
  SendPurpleButton, SendSmallText,
  SendTable,
  SendTableBody,
  SendTableHead,
  SendTableRow,
  SendText,
  SendWhiteContainer
} from "./SendHomeWork.styled";
import { ReactComponent as Trash } from './assets/trash.svg'
import { ReactComponent as Add } from './assets/add.svg'
import { ReactComponent as Upload } from './assets/upload.svg'
import {AccountHwTitle} from "../../AccountHomeWork.styled";
import {useDropzone} from "react-dropzone";
import {useRef, useState} from "react";
import {format} from "date-fns";

export const SendHomeWork = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    // Добавляем файлы в состояние
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Клик по скрытому input
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 5,
    noClick: files.length > 0,
  });



  return <SendHomeWorkContainer>
    <AccountHwTitle>Добавить ответ на задание</AccountHwTitle>
    <SendHomeWorkContent>
      <SendHomeWorkLeft>
        <SendText>Добавить в виде файла</SendText>
        <ButtonsContainer>
          <SendPurpleButton>Сохранить</SendPurpleButton>
          <SendBlackButton>Отмена</SendBlackButton>
        </ButtonsContainer>
      </SendHomeWorkLeft>
      <SendHomeWorkRight>
        <IconsContaienr>
          <Add onClick={openFileDialog} />
          <Upload />
          <Trash />
        </IconsContaienr>
        <SendWhiteContainer {...getRootProps()}>
          <input {...getInputProps()} ref={fileInputRef} style={{ display: 'none' }}/>
          {files.length > 0 ? (
            <SendTable>
              <SendTableHead>
                <SendSmallText>Название</SendSmallText>
                <SendSmallText>Последнее изминение</SendSmallText>
                <SendSmallText>Размер</SendSmallText>
                <SendSmallText>Тип</SendSmallText>
              </SendTableHead>
              <SendTableBody>
                {files.map((file) => (
                  <SendTableRow key={file.name}>
                    <SendSmallText>{file.name}</SendSmallText>
                    <SendSmallText>{format(file.lastModified, 'dd.MM.yyyy')}</SendSmallText>
                    <SendSmallText>{(file.size / 1024).toFixed(2)} KB</SendSmallText>
                    <SendSmallText>{file.type}</SendSmallText>
                  </SendTableRow>
                ))}

              </SendTableBody>
            </SendTable>
          ) : (
            <SendDragItem>
              <SendText>Для загрузки файлов перетащите их сюда</SendText>
            </SendDragItem>
          )}

        </SendWhiteContainer>
      </SendHomeWorkRight>
    </SendHomeWorkContent>
  </SendHomeWorkContainer>
}
