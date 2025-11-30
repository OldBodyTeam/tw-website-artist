"use client";

import { Form, Input, Radio } from "antd";

const ContactForm = () => {
  return (
    <Form layout="vertical" className="w-full md:w-[536px] min-w-[320px]">
      <Form.Item name="name" label="聯絡人姓名">
        <Input placeholder="請輸入聯絡人姓名" className="w-full" />
      </Form.Item>
      <Form.Item name="email" label="公司名稱">
        <Input placeholder="請輸入公司名稱" className="w-full" />
      </Form.Item>
      <Form.Item name="phone" label="聯絡電話">
        <Input placeholder="請輸入聯絡電話" className="w-full" />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input placeholder="請輸入Email" className="w-full" />
      </Form.Item>
      <Form.Item name="message" label="洽詢項目（多選）">
        <Radio.Group className="flex gap-[12px] [&_.ant-radio-label]:!pl-[4px] [&_.ant-radio-label]:!pr-[4px] radio-primary">
          <Radio value={1}>品牌規劃</Radio>
          <Radio value={2}>網站設計</Radio>
          <Radio value={3}>社群行銷</Radio>
          <Radio value={4}>口碑行銷</Radio>
          <Radio value={5}>廣告投放</Radio>
          <Radio value={6}>各類印刷</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="message" label="需求內容">
        <Input.TextArea placeholder="請輸入需求內容" className="w-full" />
      </Form.Item>
      <div className="cursor-pointer bg-[#F8FF31] w-full flex justify-center items-center text-[#0A090F] py-[12px] text-[14px]">
        提交
      </div>
    </Form>
  );
};
export { ContactForm };
