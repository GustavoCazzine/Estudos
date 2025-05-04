
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { User, Package, Heart, Settings, MapPin, Phone, Mail, Calendar, PenSquare, Loader2, Truck, ShoppingBag, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockOrders = [
  {
    id: 'ORD-123456',
    date: '15/05/2024',
    status: 'entregue',
    total: 459.90,
    items: 3,
    tracking: 'BR1234567890'
  },
  {
    id: 'ORD-123457',
    date: '02/06/2024',
    status: 'em andamento',
    total: 789.90,
    items: 5,
    tracking: 'BR0987654321'
  },
  {
    id: 'ORD-123458',
    date: '10/06/2024',
    status: 'preparando',
    total: 129.90,
    items: 1,
    tracking: null
  }
];

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('perfil');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Formulário de perfil
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    address: {
      street: 'Rua dos Pescadores',
      number: '123',
      complement: 'Apto 101',
      neighborhood: 'Beira Mar',
      city: 'Florianópolis',
      state: 'SC',
      zipCode: '88000-000'
    }
  });
  
  useEffect(() => {
    // Redirecionar se não estiver autenticado
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
    
    // Preencher formulário com dados do usuário
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        email: user.email,
        phone: '(48) 99999-9999', // Dados mockados
        birthDate: '01/01/1990' // Dados mockados
      }));
    }
    
    // Atualizar título da página
    document.title = 'Meu Perfil | Hook & Catch';
  }, [user, isAuthenticated, isLoading, navigate]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      }
    }));
  };
  
  const handleSaveProfile = async () => {
    setIsSaving(true);
    // Simulação de salvamento
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setIsEditing(false);
    toast.success('Perfil atualizado com sucesso!');
  };
  
  const renderStatusBadge = (status: string) => {
    switch(status) {
      case 'entregue':
        return <Badge className="bg-green-500">Entregue</Badge>;
      case 'em andamento':
        return <Badge className="bg-blue-500">Em Andamento</Badge>;
      case 'preparando':
        return <Badge className="bg-amber-500">Preparando</Badge>;
      default:
        return <Badge className="bg-gray-500">Processando</Badge>;
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-fishing-600" />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-center">{user?.name}</CardTitle>
                    <CardDescription className="text-center">{user?.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <Tabs 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                    orientation="vertical"
                  >
                    <TabsList className="flex flex-col h-auto bg-transparent gap-1">
                      <TabsTrigger 
                        value="perfil" 
                        className="w-full justify-start px-2 data-[state=active]:bg-fishing-50 data-[state=active]:text-fishing-700 hover:bg-gray-100"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Meu Perfil
                      </TabsTrigger>
                      <TabsTrigger 
                        value="pedidos" 
                        className="w-full justify-start px-2 data-[state=active]:bg-fishing-50 data-[state=active]:text-fishing-700 hover:bg-gray-100"
                      >
                        <Package className="h-4 w-4 mr-2" />
                        Meus Pedidos
                      </TabsTrigger>
                      <TabsTrigger 
                        value="favoritos" 
                        className="w-full justify-start px-2 data-[state=active]:bg-fishing-50 data-[state=active]:text-fishing-700 hover:bg-gray-100"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        Favoritos
                      </TabsTrigger>
                      <TabsTrigger 
                        value="configuracoes" 
                        className="w-full justify-start px-2 data-[state=active]:bg-fishing-50 data-[state=active]:text-fishing-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Configurações
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            {/* Conteúdo Principal */}
            <div className="md:w-3/4">
              <Tabs value={activeTab} className="w-full">
                <TabsContent value="perfil" className="mt-0">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Meu Perfil</CardTitle>
                        <CardDescription>Visualize e atualize suas informações pessoais</CardDescription>
                      </div>
                      <Button variant={isEditing ? "outline" : "default"} onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? (
                          "Cancelar"
                        ) : (
                          <>
                            <PenSquare className="h-4 w-4 mr-2" />
                            Editar
                          </>
                        )}
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Informações Pessoais</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={formData.name} 
                              onChange={handleInputChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email} 
                              onChange={handleInputChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleInputChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="birthDate">Data de Nascimento</Label>
                            <Input 
                              id="birthDate" 
                              name="birthDate" 
                              value={formData.birthDate} 
                              onChange={handleInputChange} 
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Endereço</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="street">Rua</Label>
                            <Input 
                              id="street" 
                              name="street" 
                              value={formData.address.street} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="number">Número</Label>
                            <Input 
                              id="number" 
                              name="number" 
                              value={formData.address.number} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="complement">Complemento</Label>
                            <Input 
                              id="complement" 
                              name="complement" 
                              value={formData.address.complement} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zipCode">CEP</Label>
                            <Input 
                              id="zipCode" 
                              name="zipCode" 
                              value={formData.address.zipCode} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="neighborhood">Bairro</Label>
                            <Input 
                              id="neighborhood" 
                              name="neighborhood" 
                              value={formData.address.neighborhood} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="city">Cidade</Label>
                            <Input 
                              id="city" 
                              name="city" 
                              value={formData.address.city} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">Estado</Label>
                            <Input 
                              id="state" 
                              name="state" 
                              value={formData.address.state} 
                              onChange={handleAddressChange} 
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    {isEditing && (
                      <CardFooter className="flex justify-end">
                        <Button onClick={handleSaveProfile} disabled={isSaving} className="bg-fishing-600 hover:bg-fishing-700">
                          {isSaving ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Salvando...
                            </>
                          ) : (
                            "Salvar Alterações"
                          )}
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </TabsContent>
                
                <TabsContent value="pedidos" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meus Pedidos</CardTitle>
                      <CardDescription>Acompanhe o status e histórico dos seus pedidos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockOrders.length > 0 ? (
                        <div className="space-y-6">
                          {mockOrders.map((order) => (
                            <Card key={order.id} className="overflow-hidden">
                              <div className="bg-gray-50 p-4">
                                <div className="flex flex-col sm:flex-row justify-between gap-2">
                                  <div>
                                    <p className="text-sm font-medium">Pedido {order.id}</p>
                                    <p className="text-sm text-gray-500">
                                      <Calendar className="inline-block h-3 w-3 mr-1" /> 
                                      {order.date}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {renderStatusBadge(order.status)}
                                    <Button variant="outline" size="sm">Detalhes</Button>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                  <div>
                                    <div className="flex items-center text-gray-700 mb-2">
                                      <ShoppingBag className="h-4 w-4 mr-2" />
                                      <span className="text-sm">{order.items} {order.items > 1 ? 'itens' : 'item'}</span>
                                    </div>
                                    {order.tracking && (
                                      <div className="flex items-center text-gray-700">
                                        <Truck className="h-4 w-4 mr-2" />
                                        <span className="text-sm">
                                          Rastreio: {order.tracking}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <div className="text-gray-700 mb-1">
                                      <CreditCard className="h-4 w-4 inline-block mr-1" />
                                      <span className="text-sm">Pagamento confirmado</span>
                                    </div>
                                    <div className="text-xl font-semibold text-fishing-700">
                                      R$ {order.total.toFixed(2).replace('.', ',')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum pedido encontrado</h3>
                          <p className="text-gray-500 mb-4">Você ainda não fez nenhum pedido em nossa loja.</p>
                          <Button className="bg-fishing-600 hover:bg-fishing-700" onClick={() => navigate('/shop')}>
                            Ir às Compras
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="favoritos" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Meus Favoritos</CardTitle>
                      <CardDescription>Seus produtos favoritos salvos para comprar depois</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12">
                        <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Nenhum favorito encontrado</h3>
                        <p className="text-gray-500 mb-4">Você ainda não adicionou itens à sua lista de favoritos.</p>
                        <Button className="bg-fishing-600 hover:bg-fishing-700" onClick={() => navigate('/shop')}>
                          Explorar Produtos
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="configuracoes" className="mt-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações</CardTitle>
                      <CardDescription>Gerencie as configurações da sua conta</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Notificações</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="marketing-emails">Emails de marketing</Label>
                            <input 
                              type="checkbox" 
                              id="marketing-emails" 
                              className="toggle toggle-primary"
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="order-updates">Atualizações de pedidos</Label>
                            <input 
                              type="checkbox" 
                              id="order-updates" 
                              className="toggle toggle-primary"
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="product-news">Novidades e lançamentos</Label>
                            <input 
                              type="checkbox" 
                              id="product-news" 
                              className="toggle toggle-primary"
                              defaultChecked
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Segurança</h3>
                        <Button variant="outline">Alterar Senha</Button>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-red-600">Zona de Perigo</h3>
                        <Button variant="destructive">Excluir Conta</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
