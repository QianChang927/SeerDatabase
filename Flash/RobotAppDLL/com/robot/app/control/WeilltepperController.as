package com.robot.app.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   
   public class WeilltepperController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _shootCount:int;
      
      private static var _canShoot:Boolean = false;
      
      private static var _canClick:Boolean = true;
      
      private static var _mapId:int;
       
      
      public function WeilltepperController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         MapListenerManager.add(_map.conLevel["cave"],clickMoundDialog);
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimat);
         if(BitBuffSetClass.getState(22612) == 1)
         {
            _mapId = 10788;
            _canShoot = false;
            _map.conLevel["cave"].gotoAndStop(2);
         }
         else if(BitBuffSetClass.getState(22611) == 1)
         {
            _mapId = 10784;
            _canShoot = false;
            _map.conLevel["cave"].gotoAndStop(2);
         }
         else
         {
            _mapId = 10783;
            _canShoot = true;
            CommonUI.addYellowExcal(_map.topLevel,346,181);
         }
      }
      
      private static function clickMoundDialog(param1:MouseEvent) : void
      {
         var mc:MovieClip;
         var e:MouseEvent = param1;
         StatManager.sendStat2014("星球活动","使用头部射击命中土堆","2015运营活动");
         mc = _map.conLevel["cave"];
         if(mc.currentFrame == 1)
         {
            if(!_canClick)
            {
               return;
            }
            NpcDialog.show(NPC.XIAOSAIER,["这个土堆看起来颇为诡异，一副被人挖开过的样子。很可能是什么洞穴的入口呢。0xff0000用头部射击把它轰开吧！0xff0000"],["知道了"],[function():void
            {
               CommonUI.removeYellowExcal(_map.topLevel);
               CommonUI.addYellowArrow(_map.topLevel,321,497);
               _map.conLevel["cave"].enabled = false;
               _canShoot = true;
               _canClick = false;
            }]);
         }
         else
         {
            NpcDialog.show(NPC.XIAOSAIER,["果然有一个洞！这么偷偷摸摸，肯定有人在里面鼓捣些什么坏事！"],["立刻下去探查一番！","我要准备一下。"],[function():void
            {
               MapManager.changeMap(_mapId);
            }]);
         }
      }
      
      private static function onAimat(param1:AimatEvent) : void
      {
         var mc:MovieClip = null;
         var e:AimatEvent = param1;
         var info:AimatInfo = e.info;
         if(info.userID != MainManager.actorID && !_canShoot)
         {
            return;
         }
         if(Boolean(_map.conLevel["cave"].hitTestPoint(info.endPos.x,info.endPos.y)) && _map.conLevel["cave"] != null)
         {
            ++_shootCount;
            if(_shootCount >= 3)
            {
               TweenLite.to(_map.conLevel["cave"],0.5,{
                  "alpha":0,
                  "onComplete":function():void
                  {
                     _map.conLevel["cave"].gotoAndStop(2);
                     _map.conLevel["cave"].enabled = true;
                     _canShoot = false;
                     CommonUI.removeYellowArrow(_map.topLevel);
                     TweenLite.to(_map.conLevel["cave"],0.1,{
                        "alpha":1,
                        "onComplete":function():void
                        {
                        }
                     });
                  }
               });
            }
            else
            {
               _map.conLevel["cave"].gotoAndStop(1);
               mc = _map.conLevel["cave"]["mc"];
               mc.gotoAndPlay(2);
               mc.addFrameScript(mc.totalFrames - 1,function():void
               {
                  mc.addFrameScript(mc.totalFrames - 1,null);
                  Alarm.show("土堆被头部射击击中，好像松动了一些。");
               });
            }
         }
      }
      
      private static function shootMoundDialog() : void
      {
         NpcDialog.show(NPC.XIAOSAIER,["果然有一个洞！这么偷偷摸摸，肯定有人在里面鼓捣些什么坏事！"],["立刻下去探查一番！","我要准备一下。"],[function():void
         {
            CommonUI.removeYellowExcal(_map.topLevel);
         }]);
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            _map = null;
            AimatController.removeEventListener(AimatEvent.PLAY_END,onAimat);
         }
      }
   }
}
