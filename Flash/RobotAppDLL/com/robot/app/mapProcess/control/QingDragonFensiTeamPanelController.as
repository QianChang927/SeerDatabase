package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class QingDragonFensiTeamPanelController
   {
      
      private static var _allMaps:Array = [1034,993];
      
      private static var _dailys:Array = [13513,13514,13518];
      
      private static var _tancainiuTaskMC:MovieClip;
      
      private static var _dateArr:Array = [new CronTimeVo("*","0-24","12-30","10","*","2014")];
      
      private static var _mcTV:MovieClip;
       
      
      public function QingDragonFensiTeamPanelController()
      {
         super();
      }
      
      public static function get tancainiuTaskMC() : MovieClip
      {
         return _tancainiuTaskMC;
      }
      
      public static function setup() : void
      {
         if(SystemTimerManager.isActive(_dateArr))
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         }
      }
      
      public static function loadTancainiuTask() : void
      {
         if(_tancainiuTaskMC != null)
         {
            DisplayUtil.removeForParent(_tancainiuTaskMC);
            _tancainiuTaskMC = null;
         }
         loadSWF();
      }
      
      public static function loadSWF() : void
      {
         ResourceManager.getResource(ClientConfig.getResPath("module/active/tancainiutask.swf"),function(param1:DisplayObject):void
         {
            _tancainiuTaskMC = param1 as MovieClip;
            _tancainiuTaskMC.buttonMode = true;
            LevelManager.mapLevel.addChild(_tancainiuTaskMC);
            _tancainiuTaskMC.x = 600;
            _tancainiuTaskMC.y = 200;
            taskHandler(_tancainiuTaskMC);
         },"tancainiutask");
      }
      
      private static function taskHandler(param1:MovieClip) : void
      {
         var curMapId:uint = 0;
         var mc:MovieClip = param1;
         var ktool_cls:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         curMapId = uint(MapManager.currentMap.id);
         ktool_cls.getMultiValue([5551,5553,5550,5559],function(param1:Array):void
         {
            var arr:Array = param1;
            var val0:uint = uint(arr[0]);
            var val1:uint = uint(arr[1]);
            var val2:uint = uint(arr[2]);
            var val3:uint = uint(arr[3]);
            if(curMapId == 1034 && val3 == 1)
            {
               mc.buttonMode = true;
               mc.gotoAndStop(1);
               mc.numTxt.text = val0 + "/3";
               if(val0 != 3)
               {
                  mc.overBtn.visible = false;
               }
               else
               {
                  mc.overBtn.visible = true;
                  mc.overBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     ModuleManager.showModule(ClientConfig.getAppModule("QingDragonFensiTeamPanel"),"正在打开...",null,1);
                     LevelManager.mapLevel.removeChild(mc);
                     DisplayUtil.removeForParent(mc);
                     mc = null;
                  });
               }
            }
            else if(curMapId == 993 && val3 == 3)
            {
               mc.buttonMode = true;
               mc.gotoAndStop(2);
               mc.numTxt.text = val1 + "/3";
               if(val1 != 3)
               {
                  mc.overBtn.visible = false;
               }
               else
               {
                  mc.overBtn.visible = true;
                  mc.overBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
                  {
                     mc.removeEventListener(MouseEvent.CLICK,arguments.callee);
                     ModuleManager.showModule(ClientConfig.getAppModule("QingDragonFensiTeamPanel"),"正在打开...",null,1);
                     LevelManager.mapLevel.removeChild(mc);
                     DisplayUtil.removeForParent(mc);
                     mc = null;
                  });
               }
            }
         });
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         var _loc2_:String = null;
         if(!SystemTimerManager.isActive(_dateArr))
         {
            removeTVListener();
         }
         if(Boolean(_mcTV) && Boolean(DisplayUtil.hasParent(_mcTV)))
         {
            _loc2_ = "青龙粉丝团长请求帮助";
            MapNamePanel.autoOpenOrClose(true);
            ToolTipManager.add(_mcTV,_loc2_);
         }
         else
         {
            loadTV();
         }
      }
      
      private static function loadTV() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("qlfstTVTips"),function(param1:DisplayObject):void
         {
            _mcTV = param1 as MovieClip;
            _mcTV.buttonMode = true;
            _mcTV.gotoAndStop(2);
            var _loc2_:String = "青龙粉丝团长请求帮助";
            MapNamePanel.ChildMc = _mcTV;
            MapNamePanel.autoOpenOrClose(true);
            ToolTipManager.add(_mcTV,_loc2_);
            _mcTV.mcGo.addEventListener(MouseEvent.CLICK,goBtnClickHandler);
            _mcTV.goBtn.addEventListener(MouseEvent.CLICK,goBtnClickHandler);
         });
      }
      
      private static function removeTVListener() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         _mcTV.goBtn.removeEventListener(MouseEvent.CLICK,goBtnClickHandler);
         DisplayUtil.removeForParent(_mcTV);
         _mcTV = null;
      }
      
      private static function goBtnClickHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("QingDragonFensiTeamPanel"),"正在打开...",null,1);
      }
      
      public static function showTopTancainiu() : void
      {
         var _loc1_:uint = uint(MapManager.currentMap.id);
         loadLittlePig();
         addBoss(_loc1_);
      }
      
      private static function loadLittlePig() : void
      {
         var _loc1_:BasePeoleModel = UserManager.getUserModel(MainManager.actorInfo.userID);
         _loc1_.showTopTancainiu();
      }
      
      public static function addBoss(param1:uint) : void
      {
         var curMapId:uint = param1;
         var ktool_cls:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         OgreController.isShow = true;
         ktool_cls.getMultiValue([5550],function(param1:Array):void
         {
            var _loc5_:OgreModel = null;
            var _loc6_:OgreModel = null;
            var _loc2_:uint = uint(param1[0]);
            var _loc3_:Array = [1821,1720];
            var _loc4_:Array = [new Point(420,430),new Point(220,300)];
            if(curMapId == _allMaps[0] && _loc2_ == 0)
            {
               (_loc5_ = new OgreModel(0)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
               _loc5_.show(_loc3_[0],_loc4_[0]);
            }
            else if(curMapId == _allMaps[1] && _loc2_ == 2)
            {
               (_loc6_ = new OgreModel(0)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
               _loc6_.show(_loc3_[1],_loc4_[1]);
            }
         });
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         if(_loc2_.id == 1821)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            FightManager.fightNoMapBoss("米宝",2559);
         }
         else if(_loc2_.id == 1720)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            FightManager.fightNoMapBoss("沃尔",2561);
         }
      }
      
      protected static function onFightOver(param1:PetFightEvent) : void
      {
         var _loc2_:Boolean = Boolean(LevelManager.mapLevel.contains(_tancainiuTaskMC));
         if(_loc2_)
         {
            DisplayUtil.removeForParent(_tancainiuTaskMC);
            _tancainiuTaskMC = null;
         }
         loadSWF();
         var _loc3_:uint = uint(MapManager.currentMap.id);
         if(_allMaps.indexOf(_loc3_) != -1)
         {
            addBoss(_loc3_);
         }
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
   }
}
