package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class EightPartDenonController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ui:MovieClip;
      
      private static var _leftCounts:Array;
      
      private static var _isGotVipAward:Boolean = false;
       
      
      public function EightPartDenonController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_10635_0"),function(param1:MovieClip):void
         {
            _ui = param1;
            _map.btnLevel.addChild(param1);
            MovieClip(_ui["mcVip"]).gotoAndStop(1);
            addEvent();
            getBuffData();
            updateVipState();
         });
      }
      
      private static function getBuffData() : void
      {
         var itemId:int = 0;
         KTool.getMultiValue([16201,16202,16203,16204,16205],function(param1:Array):void
         {
            _leftCounts = [];
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               _leftCounts[_loc2_] = 3 - param1[_loc2_];
               _ui["txtCount_" + _loc2_].text = "今日剩余挑战次数：" + _leftCounts[_loc2_];
               _loc2_++;
            }
            _isGotVipAward = !!param1[4];
            updateVipState();
         });
         itemId = 1702433;
         ItemManager.updateItems([itemId],function():void
         {
            var _loc1_:int = int(ItemManager.getNumByID(itemId));
            KTool.showScore(_ui["mcCount"],_loc1_,0,true);
         });
      }
      
      private static function updateVipState() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            if(_isGotVipAward)
            {
               MovieClip(_ui["mcVip"]).gotoAndStop(3);
               KTool.enableMC([MovieClip(_ui["mcVip"])],false);
            }
            else
            {
               MovieClip(_ui["mcVip"]).gotoAndStop(2);
            }
         }
         else
         {
            MovieClip(_ui["mcVip"]).gotoAndStop(1);
         }
      }
      
      private static function addEvent() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            SimpleButton(_ui["btnBoss_" + _loc1_]).addEventListener(MouseEvent.CLICK,onClickBoss);
            _loc1_++;
         }
         SimpleButton(_ui["btnBag"]).addEventListener(MouseEvent.CLICK,onClickBag);
         SimpleButton(_ui["btnCure"]).addEventListener(MouseEvent.CLICK,onClickCure);
         MovieClip(_ui["mcVip"]).addEventListener(MouseEvent.CLICK,onClickVip);
         SimpleButton(_ui["btnExit"]).addEventListener(MouseEvent.CLICK,onClickExit);
      }
      
      private static function removeEvent() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            SimpleButton(_ui["btnBoss_" + _loc1_]).removeEventListener(MouseEvent.CLICK,onClickBoss);
            _loc1_++;
         }
         SimpleButton(_ui["btnBag"]).removeEventListener(MouseEvent.CLICK,onClickBag);
         SimpleButton(_ui["btnCure"]).removeEventListener(MouseEvent.CLICK,onClickCure);
         MovieClip(_ui["mcVip"]).removeEventListener(MouseEvent.CLICK,onClickVip);
         SimpleButton(_ui["btnExit"]).removeEventListener(MouseEvent.CLICK,onClickExit);
      }
      
      protected static function onClickBoss(param1:MouseEvent) : void
      {
         var _loc3_:Array = null;
         var _loc2_:int = int(String(param1.currentTarget.name).split("_")[1]);
         if(_leftCounts[_loc2_] > 0)
         {
            _loc3_ = [2502,2503,2504,2505];
            if(_loc2_ == 3)
            {
               if(MainManager.actorInfo.isVip)
               {
                  FightManager.fightNoMapBoss("",_loc3_[_loc2_]);
               }
               else
               {
                  Alarm2.show("你目前还不是VIP，无法完成VIP挑战！");
               }
            }
            else
            {
               FightManager.fightNoMapBoss("",_loc3_[_loc2_]);
            }
         }
         else
         {
            Alarm2.show("你今天的挑战机会已经用完，请明天再来吧！");
         }
      }
      
      protected static function onClickBag(param1:MouseEvent) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      protected static function onClickCure(param1:MouseEvent) : void
      {
         PetManager.cureAll();
      }
      
      protected static function onClickVip(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(MainManager.actorInfo.isVip)
         {
            KTool.doExchange(3848,function():void
            {
               _isGotVipAward = true;
               getBuffData();
               updateVipState();
            });
         }
         else
         {
            LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
            {
               updateVipState();
               MainManager.actorInfo.mapID = 10635;
            });
         }
      }
      
      protected static function onClickExit(param1:MouseEvent) : void
      {
         MapManager.changeMap(1034);
      }
      
      public static function destroy() : void
      {
         removeEvent();
         _map = null;
         _ui = null;
         _leftCounts = null;
      }
   }
}
