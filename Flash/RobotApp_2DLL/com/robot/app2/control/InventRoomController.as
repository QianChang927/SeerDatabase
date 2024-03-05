package com.robot.app2.control
{
   import com.robot.app.panel.PetChoosePanel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.HolyPetManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   
   public class InventRoomController
   {
       
      
      public function InventRoomController()
      {
         super();
      }
      
      public static function onSuperItem() : void
      {
         var a:Array;
         var count:int;
         var i:int;
         var onlyInfo:PetInfo = null;
         var petinfo:PetListInfo = null;
         SocketConnection.send(1022,86055020);
         a = PetManager.getBagMap();
         count = 0;
         i = 0;
         while(i < a.length)
         {
            petinfo = a[i];
            if(HolyPetManager.HOLY_PET_CLASS.indexOf(PetXMLInfo.getPetClass(petinfo.id)) != -1)
            {
               count++;
               onlyInfo = PetManager.getPetInfo(petinfo.catchTime);
            }
            i++;
         }
         if(count == 0)
         {
            Alarm.show("请先把你的圣光精灵放入背包！");
         }
         else if(count == 1)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HolyPetSkillPanel"),"正在打开....",onlyInfo);
         }
         else
         {
            PetChoosePanel.show(function(param1:PetInfo):void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("HolyPetSkillPanel"),"正在打开....",param1);
            },null,function(param1:PetInfo):Boolean
            {
               if(HolyPetManager.HOLY_PET_CLASS.indexOf(PetXMLInfo.getPetClass(param1.id)) != -1)
               {
                  return true;
               }
               return false;
            });
         }
      }
      
      public static function onVipServant() : void
      {
         NpcDialog.show(NPC.VIP_ZHUANYUAN,["哇咔咔，我就是VIP专员！发明家肖恩发明了我，我可是只为VIP服务哦！"],["我要领取vip战斗火焰 "," 我要查看vip专属物品","  我找错人了，抱歉！"],[function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipFirePanel"));
         },function():void
         {
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoVipBuyPanel"));
         }]);
      }
   }
}
