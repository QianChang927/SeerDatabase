package com.robot.module.app
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.ui.alert.Alarm2;
   
   public class ExploreAmysteryShuiYinHuS2Panel extends ActivityModel
   {
      private var itemCount1:int;
      
      private var itemCount2:int;
      
      public function ExploreAmysteryShuiYinHuS2Panel()
      {
         super();
         resUrl = "2024/1213/ExploreAmysteryShuiYinHuS2Panel";
         configUrl = "2024/1213/ExploreAmysteryShuiYinHu";
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("1213探秘水银湖生命","打开精灵强化弹窗","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         this.itemCount1 = getValue("itemCount4");
         this.itemCount2 = getValue("itemCount5");
      }
      
      private function hasEff(petInfo:PetInfo) : Boolean
      {
         var effect_0:PetEffectInfo = null;
         var bool:Boolean = false;
         for(var index0:uint = 0; index0 < petInfo.effectList.length; index0++)
         {
            effect_0 = petInfo.effectList[index0];
            if(effect_0.effectID == 893)
            {
               return true;
            }
         }
         return bool;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               hide();
               ModuleManager.showAppModule("ExploreAmysteryShuiYinHuMainPanel");
               break;
            case "getBtn_1":
               if(this.itemCount1 >= 4)
               {
                  PetManager.upDate(function():void
                  {
                     var defaultPet:PetInfo = PetManager.getPetInfo(PetManager.defaultTime);
                     if(defaultPet.id == 4703)
                     {
                        if(defaultPet.hideSKill == null)
                        {
                           doAction("FlgeReq1",12).then(function():void
                           {
                              Alarm2.show("成功兑换波波鱼第五技能！");
                              refresh();
                           });
                        }
                        else
                        {
                           Alarm2.show("当前精灵已解锁第五技能！");
                        }
                     }
                     else
                     {
                        Alarm2.show("请将精灵置于背包首发位置。",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               else
               {
                  Alarm2.show("兑换所需材料不足！");
               }
               break;
            case "getBtn_2":
               if(this.itemCount2 >= 4)
               {
                  PetManager.upDate(function():void
                  {
                     var defaultPet:PetInfo = PetManager.getPetInfo(PetManager.defaultTime);
                     if(defaultPet.id == 4703)
                     {
                        if(!hasEff(defaultPet))
                        {
                           doAction("FlgeReq1",13).then(function():void
                           {
                              Alarm2.show("成功兑换波波鱼专属特性！");
                              refresh();
                           });
                        }
                        else
                        {
                           Alarm2.show("当前精灵已解锁专属特性！");
                        }
                     }
                     else
                     {
                        Alarm2.show("请将精灵置于背包首发位置。",function():void
                        {
                           PetBagControllerNew.showByBuffer();
                        });
                     }
                  });
               }
               else
               {
                  Alarm2.show("兑换所需材料不足！");
               }
         }
      }
   }
}

