import React from 'react';
import { Badge } from 'antd';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import { Cascader } from 'antd';
import { Col } from 'antd';
import { Divider } from 'antd';
import { Dropdown } from 'antd';
import { Form } from 'antd';
import * as Icons from '@ant-design/icons';
import { Image } from 'antd';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Radio } from 'antd';
import { Row } from 'antd';
import { Select } from 'antd';
import { Space } from 'antd';
import { Typography } from 'antd';

function Icon(props) {
      return React.createElement(Icons[props.icon], { ...props });
    }


export default function UXPinLayout() {

const [collapsed, setCollapsed] = React.useState(false);
const [selectedKeys, setSelectedKeys] = React.useState(["i","t","e","m","-","1"]);
const [value, setValue] = React.useState(undefined);
const [value2, setValue2] = React.useState('12.151.422/0001-55');
const [value4, setValue4] = React.useState('Supermercado Gaste Menos');
const [value6, setValue6] = React.useState(undefined);
const [value8, setValue8] = React.useState(undefined);
const [value10, setValue10] = React.useState(undefined);
const [value12, setValue12] = React.useState(undefined);
const [value14, setValue14] = React.useState(undefined);
const [value16, setValue16] = React.useState(undefined);
const [value18, setValue18] = React.useState(undefined);

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
        src="https://s3.amazonaws.com/upload.uxpin/files/1373907/1320082/Logo-81f95b7390b28bad143414b2da43617d-933d5b.PNG"
        width={130}
      />
    </Col>
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={selectedKeys}
      onSelect={(...args) => { let selectedKeys = args[0].selectedKeys; setSelectedKeys(selectedKeys); }}
    >
      <Menu.Item
        key="despesas"
        label="Despesas"
        icon={
          <Icon
            icon="CalculatorOutlined"
          />
        }
      >
        Despesas
      </Menu.Item>
      <Menu.Item
        key="estabelecimentos"
        label="Estabelecimentos"
        disabled={true}
        icon={
          <Icon
            icon="BankOutlined"
          />
        }
      >
        Estabelecimentos
      </Menu.Item>
      <Menu.Item
        key="produtos"
        label="Produtos"
        icon={
          <Icon
            icon="ShopOutlined"
          />
        }
      >
        Produtos
      </Menu.Item>
      <Menu.Item
        key="categorias"
        label="Categorias"
        icon={
          <Icon
            icon="DatabaseOutlined"
          />
        }
      >
        Categorias despesas
      </Menu.Item>
      <Menu.Item
        key="financeiro"
        label="Financeiro"
        icon={
          <Icon
            icon="DollarCircleOutlined"
          />
        }
      >
        Financeiro
      </Menu.Item>
      <Menu.Item
        key="deducaoIR"
        label="Dedução IR"
        icon={
          <Icon
            icon="CalendarOutlined"
          />
        }
      >
        Dedução IR
      </Menu.Item>
      <Divider />
      <Menu.Item
        key="ajuda"
        label="Ajuda"
        icon={
          <Icon
            icon="MailOutlined"
          />
        }
      >
        Ajuda
      </Menu.Item>
    </Menu>
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
              Estabelecimentos
            </Typography.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Typography.Link
              href="#/"
            >
              Novo estabelecimento
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
            Cadastro de estabelecimento
          </Typography.Title>
          <Form.Item
            label="Código do estabelecimento"
          >
            <Input
              placeholder="52"
              disabled={true}
              value={value}
              onChange={(...args) => { let value = args[0].target.value; setValue(value); }}
            />
          </Form.Item>
          <Form.Item
            label="Tipo de Pessoa"
          >
            <Cascader
              options={[ { value: "Física", label: "Física" }, { value: "Jurídica", label: "Jurídica" } ]}
              placeholder="Jurídica"
            />
          </Form.Item>
          <Form.Item
            label="CPF / CNPJ"
          >
            <Input
              value={value2}
              onChange={(...args) => { let value2 = args[0].target.value; setValue2(value2); }}
            />
          </Form.Item>
          <Form.Item
            label="Nome do estabelecimento"
          >
            <Input
              placeholder=""
              value={value4}
              onChange={(...args) => { let value4 = args[0].target.value; setValue4(value4); }}
            />
          </Form.Item>
          <div
            style={{ padding: "8px", maxWidth: "600px", margin: "0 auto", border: "1px solid rgb(217, 215, 215)" }}
          >
            <Typography.Title
              level={4}
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Endereço
            </Typography.Title>
            <Form
              layout="vertical"
              style={{ width: "100%" }}
            >
              <Row
                gutter={20}
                style={{ marginTop: "10px" }}
              >
                <Col
                  span={12}
                >
                  <Form.Item
                    label="CEP"
                    required={true}
                  >
                    <Input
                      placeholder="00000-000"
                      value={value6}
                      onChange={(...args) => { let value6 = args[0].target.value; setValue6(value6); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={12}
                >
                  <Form.Item
                    label="Estado"
                    required={true}
                  >
                    <Select
                      placeholder="Selecione o estado"
                      value={value8}
                      onChange={(...args) => { let value8 = args[0].target.value; setValue8(value8); }}
                    >
                      <Select.Option
                        value="AC"
                      >
                        Acre
                      </Select.Option>
                      <Select.Option
                        value="AL"
                      >
                        Alagoas
                      </Select.Option>
                      <Select.Option
                        value="AP"
                      >
                        Amapá
                      </Select.Option>
                      <Select.Option
                        value="AM"
                      >
                        Amazonas
                      </Select.Option>
                      <Select.Option
                        value="BA"
                      >
                        Bahia
                      </Select.Option>
                      <Select.Option
                        value="CE"
                      >
                        Ceará
                      </Select.Option>
                      <Select.Option
                        value="DF"
                      >
                        Distrito Federal
                      </Select.Option>
                      <Select.Option
                        value="ES"
                      >
                        Espírito Santo
                      </Select.Option>
                      <Select.Option
                        value="GO"
                      >
                        Goiás
                      </Select.Option>
                      <Select.Option
                        value="MA"
                      >
                        Maranhão
                      </Select.Option>
                      <Select.Option
                        value="MT"
                      >
                        Mato Grosso
                      </Select.Option>
                      <Select.Option
                        value="MS"
                      >
                        Mato Grosso do Sul
                      </Select.Option>
                      <Select.Option
                        value="MG"
                      >
                        Minas Gerais
                      </Select.Option>
                      <Select.Option
                        value="PA"
                      >
                        Pará
                      </Select.Option>
                      <Select.Option
                        value="PB"
                      >
                        Paraíba
                      </Select.Option>
                      <Select.Option
                        value="PR"
                      >
                        Paraná
                      </Select.Option>
                      <Select.Option
                        value="PE"
                      >
                        Pernambuco
                      </Select.Option>
                      <Select.Option
                        value="PI"
                      >
                        Piauí
                      </Select.Option>
                      <Select.Option
                        value="RJ"
                      >
                        Rio de Janeiro
                      </Select.Option>
                      <Select.Option
                        value="RN"
                      >
                        Rio Grande do Norte
                      </Select.Option>
                      <Select.Option
                        value="RS"
                      >
                        Rio Grande do Sul
                      </Select.Option>
                      <Select.Option
                        value="RO"
                      >
                        Rondônia
                      </Select.Option>
                      <Select.Option
                        value="RR"
                      >
                        Roraima
                      </Select.Option>
                      <Select.Option
                        value="SC"
                      >
                        Santa Catarina
                      </Select.Option>
                      <Select.Option
                        value="SP"
                      >
                        São Paulo
                      </Select.Option>
                      <Select.Option
                        value="SE"
                      >
                        Sergipe
                      </Select.Option>
                      <Select.Option
                        value="TO"
                      >
                        Tocantins
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Cidade"
                required={true}
                style={{ marginTop: "10px" }}
              >
                <Input
                  placeholder="Digite o nome da cidade"
                  value={value10}
                  onChange={(...args) => { let value10 = args[0].target.value; setValue10(value10); }}
                />
              </Form.Item>
              <Form.Item
                label="Bairro"
                required={true}
                style={{ marginTop: "40px" }}
              >
                <Input
                  placeholder="Digite o nome do bairro"
                  value={value12}
                  onChange={(...args) => { let value12 = args[0].target.value; setValue12(value12); }}
                />
              </Form.Item>
              <Row
                gutter={16}
                style={{ marginTop: "40px" }}
              >
                <Col
                  span={16}
                >
                  <Form.Item
                    label="Logradouro"
                    required={true}
                  >
                    <Input
                      placeholder="Rua, Avenida, Travessa, etc."
                      value={value14}
                      onChange={(...args) => { let value14 = args[0].target.value; setValue14(value14); }}
                    />
                  </Form.Item>
                </Col>
                <Col
                  span={8}
                >
                  <Form.Item
                    label="Número"
                    required={true}
                  >
                    <Input
                      placeholder="123"
                      value={value16}
                      onChange={(...args) => { let value16 = args[0].target.value; setValue16(value16); }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Complemento"
                style={{ marginTop: "20px" }}
              >
                <Input
                  placeholder="Apartamento, Bloco, Casa, etc."
                  value={value18}
                  onChange={(...args) => { let value18 = args[0].target.value; setValue18(value18); }}
                />
              </Form.Item>
              <Form.Item
                label="Ponto de Referência"
                style={{ marginTop: "40px" }}
              >
                <Input.TextArea
                  rows={2}
                  placeholder="Próximo ao shopping, em frente à farmácia, etc."
                />
              </Form.Item>
              <Form.Item
                label="Tipo de Endereço"
                style={{ marginTop: "60px" }}
              >
                <Radio.Group>
                  <Radio
                    value="residencial"
                  >
                    Residencial
                  </Radio>
                  <Radio
                    value="comercial"
                  >
                    Comercial
                  </Radio>
                  <Radio
                    value="outros"
                  >
                    Outros
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </div>
          <Divider />
          <Form.Item>
            <div
              style={{ display: "flex", gap: "20px" }}
            >
              <Button
                type="primary"
              >
                Cadastrar
              </Button>
              <Button>
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