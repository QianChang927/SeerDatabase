package com.robot.app.petUpdate
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petUpdate.updatePanel.CountExpPanelManager;
   import com.robot.app.petUpdate.updatePanel.UpdatePropManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.update.PetUpdatePropInfo;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert2.FightOverAlertManager;
   import com.robot.core.ui.alert2.fightOverAlert.PetEvolutionAlert;
   import flash.display.Bitmap;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.utils.DisplayUtil;
   
   public class PetUpdatePropController
   {
      
      public static var owner:com.robot.app.petUpdate.PetUpdatePropController;
      
      public static var addition:Number;
      
      public static var addPer:uint;
      
      public static var eggAddition:uint;
       
      
      private var _bmp:Bitmap;
      
      private var _infoArray:Array;
      
      private var checkmapovert:uint;
      
      public function PetUpdatePropController()
      {
         this._infoArray = [];
         super();
         owner = this;
         FightDispatcher.addEventListener(PetFightEvent.PET_UPDATE_PROP,this.onFightClose);
      }
      
      public function setup(param1:PetUpdatePropInfo) : void
      {
         var _loc2_:UpdatePropInfo = null;
         var _loc3_:uint = 0;
         var _loc4_:PetEvolutionAlert = null;
         addition = param1.addition;
         addPer = param1.addPer;
         eggAddition = param1.eggAddition;
         this._infoArray = param1.dataArray;
         for each(_loc2_ in this._infoArray)
         {
            _loc3_ = uint(PetXMLInfo.getEvolvingLv(_loc2_.id));
            if(Boolean(PetXMLInfo.getEvolvFlag(_loc2_.id)))
            {
               if(_loc2_.level >= _loc3_ && _loc3_ != 0)
               {
                  _loc4_ = new PetEvolutionAlert();
                  if(_loc2_.id != 55)
                  {
                     _loc4_.setup("你的精灵已经达到了进化等级，现在可以在实验室的<font color=\'#ff0000\'>精灵进化仓</font>里进行进化了！");
                  }
                  else if(_loc2_.id == 671)
                  {
                     _loc4_.setup("亚伦斯已经达到了进化等级，需要到<font color=\'#ff0000\'>拓梯星</font>吸收活力之泉的能量才可以进化哦！");
                  }
                  if(_loc2_.id != 55 && _loc2_.id != 600 && _loc2_.id != 601)
                  {
                     FightOverAlertManager.add(_loc4_,FightOverAlertManager.HIGHEST);
                  }
               }
            }
            if(_loc2_.level > MainManager.actorInfo.petMaxLev)
            {
               MainManager.actorInfo.petMaxLev = _loc2_.level;
               ToolBarController.checkPetLv();
            }
         }
         if(PetUpdateCmdListener.IN_EXP_PANEL)
         {
            this.checkLevelPanel();
         }
      }
      
      private function onFightClose(param1:PetFightEvent) : void
      {
         this._bmp = param1.dataObj as Bitmap;
         if(this._infoArray.length == 0)
         {
            PetManager.upDate();
         }
         if(CountExpPanelManager.isEmptyShow)
         {
            this.show();
         }
         else
         {
            DisplayUtil.removeForParent(this._bmp);
            this._bmp = null;
            CountExpPanelManager.isEmptyShow = true;
         }
      }
      
      public function show(param1:Boolean = false) : void
      {
         var fun:Function = null;
         var showByLevelPanel:Boolean = param1;
         fun = function():void
         {
            checkLevelPanel(showByLevelPanel);
         };
         if(showByLevelPanel)
         {
            CountExpPanelManager.showExpPanel(this._infoArray,this._bmp,fun);
            return;
         }
         if(FightManager.petFightClass == "PetFightDLL")
         {
            CountExpPanelManager.showExpPanel(this._infoArray,this._bmp,fun);
         }
         else if(FightManager.petFightClass == "PetFightDLL_201308")
         {
            if(AutomaticFightManager.isStart)
            {
               AutomaticFightManager.fightOver(this._bmp);
               return;
            }
            if(MapManager.isInMap)
            {
               ModuleManager.showModule(ClientConfig.getAppModule("CountExpPanel"),"正在战斗结算……",{
                  "itemArr":this._infoArray,
                  "bmp":this._bmp,
                  "callBack":fun
               });
            }
            else
            {
               clearInterval(this.checkmapovert);
               this.checkmapovert = setInterval(function():void
               {
                  if(MapManager.isInMap)
                  {
                     clearInterval(checkmapovert);
                     ModuleManager.showModule(ClientConfig.getAppModule("CountExpPanel"),"正在战斗结算……",{
                        "itemArr":_infoArray,
                        "bmp":_bmp,
                        "callBack":fun
                     });
                  }
               },100);
            }
         }
      }
      
      private function checkLevelPanel(param1:Boolean = false) : void
      {
         if(this._infoArray.length == 0)
         {
            return;
         }
         var _loc2_:UpdatePropInfo = this._infoArray.shift() as UpdatePropInfo;
         var _loc3_:PetInfo = PetManager.getPetInfo(_loc2_.catchTime);
         if(_loc3_ == null)
         {
            return;
         }
         UpdatePropManager.update(_loc2_,_loc3_,this.closeHandler,param1);
      }
      
      private function closeHandler() : void
      {
         if(this._infoArray.length > 0)
         {
            this.checkLevelPanel();
         }
         else
         {
            FightDispatcher.dispatchEvent(new PetFightEvent(PetFightEvent.PET_UPDATE_SKILL,this._bmp));
         }
      }
   }
}
