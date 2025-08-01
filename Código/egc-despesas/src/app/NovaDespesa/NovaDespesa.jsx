import React from 'react';
import { Badge } from 'antd';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Checkbox } from 'antd';
import { Col } from 'antd';
import { Dropdown } from 'antd';
import { Form } from 'antd';
import * as Icons from '@ant-design/icons';
import { Image } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Row } from 'antd';
import { Select } from 'antd';
import { Space } from 'antd';
import { Typography } from 'antd';
import MenuGeral from '../MenuGeral/MenuGeral';

function Icon(props) {
      return React.createElement(Icons[props.icon], { ...props });
    }


export default function NovaDespesa() {

const [collapsed, setCollapsed] = React.useState(false);
const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState('8853');
const [value4, setValue4] = React.useState('R$ 825,12');
const [value6, setValue6] = React.useState(undefined);
const [value8, setValue8] = React.useState('24/04/2025');
const [value10, setValue10] = React.useState('2');
const [value12, setValue12] = React.useState(undefined);
const [checked, setChecked] = React.useState(false);
const [value14, setValue14] = React.useState('24/04/2025');
const [value16, setValue16] = React.useState('2');
const [value18, setValue18] = React.useState(undefined);
const [value20, setValue20] = React.useState('1');
const [value22, setValue22] = React.useState('24/04/2025');
const [value24, setValue24] = React.useState('R$ 412,56');
const [value26, setValue26] = React.useState('Vinho Malbec Santa Júlia');
const [value28, setValue28] = React.useState('R$ 235,42');
const [value30, setValue30] = React.useState('Queijo Vale da Canastra');
const [value32, setValue32] = React.useState('R$ 509,70');
const [value34, setValue34] = React.useState(undefined);
const [value36, setValue36] = React.useState('R$ 80,00');
const [value38, setValue38] = React.useState(undefined);
const [value40, setValue40] = React.useState(undefined);
const [checked2, setChecked2] = React.useState(true);
const [value42, setValue42] = React.useState(undefined);
const [value44, setValue44] = React.useState(undefined);

  return (<Layout
  hasSider={true}
>
  <Layout.Sider
    collapsible={true}
    breakpoint="lg"
    theme="dark"
    collapsed={collapsed}
    onCollapse={(...args) => { let collapsed = args[0]; setCollapsed(collapsed); }}
  >
    <Col
      flex={1}
      style={{ textAlign: "center", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <Image
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-af6b08.PNG"
        width={130}
      />
    </Col>
    <MenuGeral />
  </Layout.Sider>
  <Layout
    hasSider={false}
  >
    <Layout.Header
      style={{ background: "#ffffff" }}
    >
      <Row
        justify="start"
        gutter={0}
      >
        <Space
          size="middle"
          style={{ flex: 1 }}
        >
          <Button
            type="text"
            size="large"
            icon={
              <Icon
                icon="MenuOutlined"
              />
            }
            onClick={() => { setCollapsed(true); }}
          />
          <Col>
            <Typography.Title
              level={4}
              style={{ margin: "0" }}
              type="secondary"
            >
              Gerenciador de Despesas
            </Typography.Title>
          </Col>
        </Space>
        <Space
          size="small"
        >
          <Dropdown
            menu={{ items: [ { key: "1", label: "1st menu item" }, { key: "2", label: "2nd menu item" }, { key: "3", label: "Danger menu item", danger: true } ] }}
          >
            <Button
              type="text"
              icon={
                <Icon
                  icon="UserOutlined"
                />
              }
            >
              Elter Girotto
            </Button>
          </Dropdown>
          <Button
            type="dashed"
            shape="circle"
            icon={
              <Icon
                icon="SettingOutlined"
              />
            }
          />
          <Badge
            count="4"
          >
            <Button
              type="dashed"
              shape="circle"
              icon={
                <Icon
                  icon="BellOutlined"
                />
              }
            />
          </Badge>
        </Space>
      </Row>
    </Layout.Header>
    <Layout.Content>
      <Space
        size="middle"
        direction="horizontal"
        split="j"
      >
        <Breadcrumb
          style={{ marginBottom: "24px" }}
        >
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Home
            </Typography.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Despesas
            </Typography.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Nova despesa
            </Typography.Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Space>
    </Layout.Content>
    <Row
      gutter={[ 16, 16 ]}
      justify="center"
    >
      <Col
        xs={24}
        sm={12}
      >
        <Form
          layout="horizontal"
        >
          <Typography.Title
            level={4}
            style={{ marginTop: "10px", marginBottom: "20px" }}
          >
            Cadastro de despesa
          </Typography.Title>
          <Row
            gutter={60}
            style={{ marginBottom: "1px" }}
          >
            <Col
              span={10}
            >
              <Form.Item
                label="Código da Despesa"
                required={false}
              >
                <Input
                  placeholder="322"
                  disabled={true}
                  value={value}
                  onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row
            gutter={60}
            style={{ marginBotom: "1px" }}
          >
            <Col
              span={10}
            >
              <Form.Item
                label="Nota Fiscal"
                required={true}
              >
                <Input
                  placeholder=""
                  disabled={false}
                  value={value2}
                  onChange={(...args) => { let value2 = args[0].target.value; setValue2(value2); }}
                />
              </Form.Item>
            </Col>
            <Col
              span={12}
            >
              <Form.Item
                label="Valor da despesa"
                required={true}
              >
                <Input
                  value={value4}
                  onChange={(...args) => { let value4 = args[0].target.value; setValue4(value4); }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Estabelecimento"
            required={true}
          >
            <Input
              placeholder="Digite o nome do estabelecimento"
              value={value6}
              onChange={(...args) => { let value6 = args[0].target.value; setValue6(value6); }}
            />
          </Form.Item>
          <div
            style={{ padding: "8px", maxWidth: "600px", margin: "0 auto", border: "1px solid rgb(217, 215, 215)" }}
          >
            <Form
              layout="vertical"
              style={{ width: "100%" }}
            >
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Data da compra"
                    required={true}
                  >
                    <Input
                      type="date"
                      value={value8}
                      onChange={(...args) => { let value8 = args[0].target.value; setValue8(value8); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Parcelas"
                    required={true}
                  >
                    <Input
                      placeholder="Quantidade de parcelas"
                      value={value10}
                      onChange={(...args) => { let value10 = args[0].target.value; setValue10(value10); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Forma de pagamento"
                    required={true}
                  >
                    <Select
                      placeholder="Cartão de Crédito"
                      value={value12}
                      onChange={(...args) => { let value12 = args[0].target.value; setValue12(value12); }}
                    >
                      <Select.Option
                        value="Cartão de Crédito"
                      >
                        <Typography.Text>
                          <Typography.Text>
                            <Button>
                              <Checkbox
                                checked={checked}
                                onChange={(...args) => { let checked = args[0].target.checked; setChecked(checked); }}
                              >
                                Checkbox label
                              </Checkbox>
                            </Button>
                          </Typography.Text>
                        </Typography.Text>
                      </Select.Option>
                      <Select.Option
                        value="Cartão de débito"
                      >
                        Cartão de débito
                      </Select.Option>
                      <Select.Option
                        value="Dinheiro"
                      >
                        Dinheiro
                      </Select.Option>
                      <Select.Option
                        value="Pix"
                      >
                        Pix
                      </Select.Option>
                      <Select.Option
                        value="Transferência"
                      >
                        Transferência
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Data da compra"
                    required={true}
                  >
                    <Input
                      type="date"
                      value={value14}
                      onChange={(...args) => { let value14 = args[0].target.value; setValue14(value14); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Parcelas"
                    required={true}
                  >
                    <Input
                      placeholder="Quantidade de parcelas"
                      value={value16}
                      onChange={(...args) => { let value16 = args[0].target.value; setValue16(value16); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Forma de pagamento"
                    required={true}
                  >
                    <Select
                      placeholder="Cartão de Crédito"
                      value={value18}
                      onChange={(...args) => { let value18 = args[0].target.value; setValue18(value18); }}
                    >
                      <Select.Option
                        value="Cartão de Crédito"
                      >
                        <Typography.Text>
                          <Typography.Text>
                            <Button>
                              Default Button
                            </Button>
                          </Typography.Text>
                        </Typography.Text>
                      </Select.Option>
                      <Select.Option
                        value="Cartão de débito"
                      >
                        Cartão de débito
                      </Select.Option>
                      <Select.Option
                        value="Dinheiro"
                      >
                        Dinheiro
                      </Select.Option>
                      <Select.Option
                        value="Pix"
                      >
                        Pix
                      </Select.Option>
                      <Select.Option
                        value="Transferência"
                      >
                        Transferência
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Typography.Text
                style={{ marginTop: "30px" }}
              >
                Vencimento - parcelas:
              </Typography.Text>
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Parcela"
                    required={true}
                  >
                    <Input
                      placeholder="Quantidade de parcelas"
                      value={value20}
                      onChange={(...args) => { let value20 = args[0].target.value; setValue20(value20); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Data de vencimento"
                    required={true}
                  >
                    <Input
                      type="date"
                      value={value22}
                      onChange={(...args) => { let value22 = args[0].target.value; setValue22(value22); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Valor"
                    required={true}
                  >
                    <Input
                      placeholder="Quantidade de parcelas"
                      value={value24}
                      onChange={(...args) => { let value24 = args[0].target.value; setValue24(value24); }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <Row
            gutter={20}
            style={{ marginTop: "10px", marginBottom: "00px" }}
          >
            <Col
              span={16}
            />
            <Col
              span={8}
            >
              <Button
                type="text"
              >
                + Adicionar produtos
              </Button>
            </Col>
          </Row>
          <div
            style={{ padding: "8px", maxWidth: "600px", margin: "2px 0px 10px 6px", border: "1px solid rgb(217, 215, 215)" }}
          >
            <Form
              layout="vertical"
              style={{ width: "100%" }}
            >
              <Typography.Text
                strong={true}
              >
                Produtos
              </Typography.Text>
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={16}
                >
                  <Form.Item
                    label="Produto"
                    required={true}
                  >
                    <Input
                      placeholder="Digite para selecionar o produto ou clique no + para cadastrar um novo"
                      value={value26}
                      onChange={(...args) => { let value26 = args[0].target.value; setValue26(value26); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Valor"
                    required={true}
                  >
                    <Input
                      placeholder="Digite o valor"
                      value={value28}
                      onChange={(...args) => { let value28 = args[0].target.value; setValue28(value28); }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={16}
                >
                  <Form.Item
                    label="Produto"
                    required={true}
                  >
                    <Input
                      placeholder="Digite para selecionar o produto ou clique no + para cadastrar um novo"
                      value={value30}
                      onChange={(...args) => { let value30 = args[0].target.value; setValue30(value30); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Valor"
                    required={true}
                  >
                    <Input
                      placeholder="Digite o valor"
                      value={value32}
                      onChange={(...args) => { let value32 = args[0].target.value; setValue32(value32); }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={16}
                >
                  <Form.Item
                    label="Produto"
                    required={true}
                  >
                    <Input
                      placeholder="Digite para selecionar o produto ou clique no + para cadastrar um novo"
                      value={value34}
                      onChange={(...args) => { let value34 = args[0].target.value; setValue34(value34); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Valor"
                    required={true}
                  >
                    <Input
                      placeholder="Digite o valor"
                      value={value36}
                      onChange={(...args) => { let value36 = args[0].target.value; setValue36(value36); }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <Row
            gutter={8}
            style={{ marginTop: "20px" }}
          >
            <Col
              span={10}
            >
              <Form.Item
                label="Categoria"
                required={true}
              >
                <Select
                  placeholder="Alimentação"
                  value={value38}
                  onChange={(...args) => { let value38 = args[0].target.value; setValue38(value38); }}
                >
                  <Select.Option
                    value="Alimentação"
                  >
                    Alimentação
                  </Select.Option>
                  <Select.Option
                    value="Saúde"
                  >
                    Saúde
                  </Select.Option>
                  <Select.Option
                    value="Transporte"
                  >
                    Transporte
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              span={10}
            >
              <Form.Item
                label="Subcategoria"
                required={true}
              >
                <Select
                  placeholder="Supermercado"
                  value={value40}
                  onChange={(...args) => { let value40 = args[0].target.value; setValue40(value40); }}
                >
                  <Select.Option
                    value="Supermercado"
                  >
                    Supermercado
                  </Select.Option>
                  <Select.Option
                    value="Açougue"
                  >
                    Açougue
                  </Select.Option>
                  <Select.Option
                    value="Hortifruti"
                  >
                    Hortifruti
                  </Select.Option>
                  <Select.Option
                    value="Transferência"
                  >
                    Transferência
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              span={4}
            >
              <Checkbox
                checked={checked2}
                onChange={(...args) => { let checked2 = args[0].target.checked; setChecked2(checked2); }}
              >
                Deduz IR
              </Checkbox>
            </Col>
          </Row>
          <Row
            gutter={20}
            style={{ marginTop: "20px" }}
          >
            <Col
              span={10}
            >
              <Form.Item
                label="Comprador"
                required={true}
              >
                <Select
                  placeholder="Elter Girotto"
                  value={value42}
                  onChange={(...args) => { let value42 = args[0].target.value; setValue42(value42); }}
                >
                  <Select.Option
                    value="Elter Girotto"
                  />
                  <Select.Option
                    value="Jussara Câmara"
                  >
                    Jussara Câmara
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              span={14}
            >
              <Form.Item
                label="Responsável Pagamento"
                required={true}
              >
                <Select
                  placeholder="Elter Girotto"
                  value={value44}
                  onChange={(...args) => { let value44 = args[0].target.value; setValue44(value44); }}
                >
                  <Select.Option
                    value="Elter Girotto"
                  />
                  <Select.Option
                    value="Jussara Câmara"
                  >
                    Jussara Câmara
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <div
              style={{ display: "flex", gap: "20px" }}
            >
              <Button
                type="primary"
                shape="default"
                size="large"
              >
                Cadastrar
              </Button>
              <Button
                size="large"
              >
                Cancelar
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </Layout>
</Layout>);
}