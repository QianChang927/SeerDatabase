package com.robot.app.control
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class CheckLevelController
   {
      
      private static var _alarm:MovieClip;
      
      private static var _pos:Point;
       
      
      public function CheckLevelController()
      {
         super();
      }
      
      public static function checkPetLv() : void
      {
         if(MainManager.actorInfo.petMaxLev >= 15)
         {
            getDefinitionByName("com.robot.app2.systems.iconLevel.IconController").showIcon("taskMain_icon");
            showIconAlarm(328,"taskMain_icon","赛尔任务档案","恭喜你开启了赛尔任务档案！每周更新的主线任务、刺激的星球活动就从这里进入，立刻体验吧！",new Point(868,40));
         }
         if(MainManager.actorInfo.petMaxLev >= 20)
         {
            getDefinitionByName("com.robot.app2.systems.iconLevel.IconController").showIcon("SPT_Icon");
            showIconAlarm(329,"SPT_Icon","赛尔先锋队任务","每个星球上都有强大的BOSS存在，通过这里你能轻松到达BOSS所在地，带上你的勇气和实力去挑战他们吧！",new Point(816,40));
         }
         if(MainManager.actorInfo.petMaxLev >= 25)
         {
            getDefinitionByName("com.robot.app2.systems.iconLevel.IconController").showIcon("SeerTrainLog_icon");
            showIconAlarm(330,"SeerTrainLog_icon","钻石任务","登陆赛尔号，记得来这里做钻石任务哦！任务不但精彩，而且奖励丰厚！",new Point(760,40));
         }
         if(MainManager.actorInfo.petMaxLev >= 30)
         {
            getDefinitionByName("com.robot.app2.systems.iconLevel.IconController").showIcon("week_icon");
            showIconAlarm(331,"week_icon","每周活动","每周赛尔号都会提供大量精彩的活动，通过这里你就能到达对应的活动场景啦，尽情玩乐吧！",new Point(700,40));
         }
         checkNewSeerLevelGift();
         NewSeerRunningLoginGiftController.setup();
      }
      
      public static function checkNewSeerLevelGift() : void
      {
         if(MainManager.actorInfo.regTime < SystemTimerManager.getTimeByDate(2012,6,15,0))
         {
            if(MainManager.actorInfo.petMaxLev >= 30)
            {
               NewSeerLevelGiftController.destory();
            }
         }
         else if(NewSeerLevelGiftController.isComplete)
         {
            if(MainManager.actorInfo.petMaxLev >= 30)
            {
               NewSeerLevelGiftController.destory();
            }
         }
         else
         {
            NewSeerLevelGiftController.showIcon();
            NewSeerLevelGiftController.updateIcon();
         }
      }
      
      private static function showIconAlarm(param1:uint, param2:String, param3:String, param4:String, param5:Point) : void
      {
         if(MainManager.actorInfo.regTime < SystemTimerManager.getTimeByDate(2012,7,20,0))
         {
            return;
         }
         if(BufferRecordManager.getState(MainManager.actorInfo,param1))
         {
            return;
         }
         BufferRecordManager.setState(MainManager.actorInfo,param1,true);
         if(_alarm)
         {
            destory();
         }
         _pos = param5;
         LevelManager.closeMouseEvent();
         _alarm = UIManager.getMovieClip("newSeerGuide_newIconAlarm_ui");
         var _loc6_:MovieClip;
         if(_loc6_ = UIManager.getMovieClip(param2))
         {
            _alarm["icon"].addChild(_loc6_);
            CommonUI.centerAlign(_loc6_,_alarm["icon"],new Point(0,0));
            _alarm["title"].text = param3;
            _alarm["intro"].text = "    " + param4;
            _alarm["ok"].addEventListener(MouseEvent.CLICK,onClose);
            MapManager.addEventListener(MapEvent.MAP_DESTROY,onMap);
            LevelManager.appLevel.addChild(_alarm);
            LevelManager.appLevel.setChildIndex(_alarm,0);
            DisplayUtil.align(_alarm,null,AlignType.MIDDLE_CENTER);
         }
      }
      
      private static function onClose(param1:MouseEvent) : void
      {
         destory();
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         destory();
      }
      
      private static function destory() : void
      {
         PanelHideEffectController.setup(_alarm,_pos);
         LevelManager.openMouseEvent();
         DisplayUtil.removeForParent(_alarm);
         _alarm["ok"].removeEventListener(MouseEvent.CLICK,onClose);
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMap);
         _alarm = null;
         _pos = null;
      }
   }
}
