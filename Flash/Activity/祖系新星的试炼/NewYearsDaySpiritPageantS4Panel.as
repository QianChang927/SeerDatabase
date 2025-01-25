package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   
   public class NewYearsDaySpiritPageantS4Panel extends ActivityModel
   {
      protected var count:int;
      
      protected var curPage:int = 1;
      
      private var getCount:Array;
      
      private var buyCount:Array;
      
      public function NewYearsDaySpiritPageantS4Panel()
      {
         this.getCount = [];
         this.buyCount = [5,5,2,2,2,2,2,2];
         super();
         resUrl = "2018/1229/NewYearsDaySpiritPageantS4Panel";
         configUrl = "2018/1229/NewYearsDaySpiritPageant";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1229元旦节精灵庆典","打开兑换面板","2018运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var i:* = undefined;
         this.count = getValue("ItemCount");
         this.getCount = getValue("getArr");
         _ui["btnMc"].gotoAndStop(this.curPage);
         _ui["mc"].gotoAndStop(this.curPage);
         if(this.curPage == 1)
         {
            _ui["mc"]["numTxt"].text = this.count;
         }
         else
         {
            _ui["mc"]["numTxt"].text = this.count;
            for(i = 1; i <= 8; i++)
            {
               _ui["mc"]["numCount_" + i].text = this.getCount[i - 1] + "/" + this.buyCount[i - 1];
               if(this.getCount[i - 1] >= this.buyCount[i - 1])
               {
                  CommonUI.setEnabled(_ui["mc"]["exchangeBtn_" + i],false);
               }
               else
               {
                  CommonUI.setEnabled(_ui["mc"]["exchangeBtn_" + i],true);
               }
            }
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("NewYearsDaySpiritPageantMainPanel");
               break;
            case "plus":
               doAction("BuyItem1").then(refresh);
               break;
            case "exchange_" + index:
               if(index <= 4)
               {
                  if(this.count < 2)
                  {
                     doAction("energyTips1");
                  }
                  else
                  {
                     doAction("ReceiveS",index).then(refresh);
                  }
               }
               else if(index == 5)
               {
                  PetManager.upDate(function():void
                  {
                     if(Boolean(PetManager.getDefaultByPetIDs([196])) || Boolean(PetManager.getDefaultByPetIDs([197])))
                     {
                        if(count >= 3)
                        {
                           doAction("super1").then(refresh);
                           Alarm2.show("超进化成功！");
                        }
                        else
                        {
                           Alarm2.show("祖系之书不足，无法兑换！");
                        }
                     }
                     else
                     {
                        Alert.show("请将祖拉或亚梅丝设为首发精灵再来进行超进化！",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               else if(index == 6)
               {
                  PetManager.upDate(function():void
                  {
                     if(Boolean(PetManager.getDefaultByPetIDs([594])) || Boolean(PetManager.getDefaultByPetIDs([595])))
                     {
                        if(count >= 3)
                        {
                           doAction("super3").then(refresh);
                           Alarm2.show("超进化成功！");
                        }
                        else
                        {
                           Alarm2.show("祖系之书不足，无法兑换！");
                        }
                     }
                     else
                     {
                        Alert.show("请将祖洛或卡洛达斯设为首发精灵再来进行超进化！",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               else if(index == 7)
               {
                  PetManager.upDate(function():void
                  {
                     if(Boolean(PetManager.getDefaultByPetIDs([1052])) || Boolean(PetManager.getDefaultByPetIDs([1053])))
                     {
                        if(count >= 3)
                        {
                           doAction("super2").then(refresh);
                           Alarm2.show("超进化成功！");
                        }
                        else
                        {
                           Alarm2.show("祖系之书不足，无法兑换！");
                        }
                     }
                     else
                     {
                        Alert.show("请将祖迪或吉亚尼设为首发精灵再来进行超进化！",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               else
               {
                  PetManager.upDate(function():void
                  {
                     if(Boolean(PetManager.getDefaultByPetIDs([1474])) || Boolean(PetManager.getDefaultByPetIDs([1475])))
                     {
                        if(count >= 5)
                        {
                           doAction("super4").then(refresh);
                           Alarm2.show("超进化成功！");
                        }
                        else
                        {
                           Alarm2.show("祖系之书或福气值不足，无法兑换！");
                        }
                     }
                     else
                     {
                        Alert.show("请将祖梅或梅诺西设为首发精灵再来进行超进化！",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               break;
            case "exchangeBtn_" + index:
               if(this.count >= 1)
               {
                  doAction("FlgeReq1",index - 1).then(refresh);
               }
               else
               {
                  doAction("energyTips1");
               }
               break;
            case "getBtn_" + index:
               this.curPage = index;
               refresh();
         }
      }
   }
}

