"use client";

import { Form, Input, Radio } from "antd";
import { useMemo, useState } from "react";

const FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0HWrms939pFERxOjZgjSoOdFQ-4mztR_iLBOAilIb5mA7ow/formResponse";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [form] = Form.useForm();
  const fieldMap = useMemo(
    () => ({
      name: "entry.1473513032",
      company: "entry.845378129",
      phone: "entry.2084390203",
      email: "entry.601777094",
      inquiryType: "entry.1557575707",
      message: "entry.1895736665",
    }),
    [],
  );

  const handleSubmit = async (values: {
    name?: string;
    company?: string;
    phone?: string;
    email?: string;
    inquiryType?: string;
    message?: string;
  }) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      const fieldName = fieldMap[key as keyof typeof fieldMap];
      if (fieldName && value) {
        payload.append(fieldName, value);
      }
    });

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });
      setSubmitStatus("success");
      form.resetFields();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      className="w-full md:w-[536px] min-w-[320px]"
      onFinish={handleSubmit}
    >
      <Form.Item name="name" label="聯絡人姓名">
        <Input
          placeholder="請輸入聯絡人姓名"
          className="w-full"
          style={{ color: "#FFFFFF" }}
        />
      </Form.Item>
      <Form.Item name="company" label="公司名稱">
        <Input
          placeholder="請輸入公司名稱"
          className="w-full"
          style={{ color: "#FFFFFF" }}
        />
      </Form.Item>
      <Form.Item name="phone" label="聯絡電話">
        <Input
          placeholder="請輸入聯絡電話"
          className="w-full"
          style={{ color: "#FFFFFF" }}
        />
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Input
          placeholder="請輸入Email"
          className="w-full"
          style={{ color: "#FFFFFF" }}
        />
      </Form.Item>
      <Form.Item name="inquiryType" label="洽詢項目（單選）">
        <Radio.Group className="flex gap-[12px] [&_.ant-radio-label]:!pl-[4px] [&_.ant-radio-label]:!pr-[4px] radio-primary">
          <Radio value="品牌規劃">品牌規劃</Radio>
          <Radio value="網站設計">網站設計</Radio>
          <Radio value="社群行銷">社群行銷</Radio>
          <Radio value="口碑行銷">口碑行銷</Radio>
          <Radio value="廣告投放">廣告投放</Radio>
          <Radio value="各類印刷">各類印刷</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="message" label="需求內容">
        <Input.TextArea
          placeholder="請輸入需求內容"
          className="w-full"
          style={{ color: "#FFFFFF" }}
        />
      </Form.Item>
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer bg-[#F8FF31] w-full flex justify-center items-center text-[#0A090F] py-[12px] text-[14px] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "提交中..." : "提交"}
      </button>
      {submitStatus === "success" ? (
        <div className="mt-[8px] text-[12px] text-[#16A34A]">
          已送出，感謝您的填寫！
        </div>
      ) : null}
      {submitStatus === "error" ? (
        <div className="mt-[8px] text-[12px] text-[#DC2626]">
          送出失敗，請稍後再試。
        </div>
      ) : null}
    </Form>
  );
};
export { ContactForm };
