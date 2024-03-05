package com.robot.app2.control.game.sorensenBattle
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GameSuolunsen
   {
      
      private static var _mapMV:MovieClip;
      
      private static var _elm:EventListenerManager;
       
      
      public function GameSuolunsen()
      {
         super();
      }
      
      public static function start() : void
      {
         var mcloader:MCLoader = null;
         _elm = new EventListenerManager();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("suolunsen_game"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mapMv:MovieClip = null;
            var e:* = param1;
            KTool.hideMapAllPlayerAndMonster();
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel["suolunsen"].visible = false;
            mapMv = mcloader.loader.content["mv"];
            _mapMV = mapMv;
            _elm.addEventListener(_mapMV["leave_btn"],MouseEvent.CLICK,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               leave();
            });
            _elm.addEventListener(_mapMV["bag"],MouseEvent.CLICK,function():void
            {
               MapManager.currentMap.controlLevel["suolunsen"].visible = true;
               FightPetBagController.show();
            });
            ToolTipManager.add(_mapMV["bag"],"背包");
            ToolTipManager.add(_mapMV["leave_btn"],"离开");
            _mapMV["leave_btn"].visible = false;
            _mapMV["bag"].visible = false;
            LevelManager.appLevel.addChild(_mapMV);
            AnimateManager.playMcAnimate(mapMv,1,"mv",function():void
            {
               LevelManager.showOrRemoveMapLevelandToolslevel(false);
               AnimateManager.playMcAnimate(mapMv,2,"mv",function():void
               {
                  _mapMV["leave_btn"].visible = true;
                  _mapMV["bag"].visible = true;
                  ToolTipManager.add(_mapMV["mv"]["npc"],"神域天王");
                  mapMv["mv"]["npc"].buttonMode = true;
                  _elm.addEventListener(mapMv["mv"]["npc"],MouseEvent.CLICK,function():void
                  {
                     ToolTipManager.remove(_mapMV["mv"]["npc"]);
                     if(!canFightBoss)
                     {
                        Alarm.show("你的背包中还没有6只满级精灵哦！");
                     }
                     else
                     {
                        FightManager.fightNoMapBoss("",1118);
                     }
                  });
               });
            });
         });
         mcloader.doLoad();
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.iconLevel.visible = false;
         LevelManager.appLevel.addChild(_mapMV);
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            if(FightManager.currentBossRegion == 1118)
            {
               AnimateManager.playMcAnimate(_mapMV,3,"mv",function():void
               {
                  ToolTipManager.add(_mapMV["mv"]["npc"],"暗黑魔君");
                  _mapMV["mv"]["npc"].buttonMode = true;
                  _elm.addEventListener(_mapMV["mv"]["npc"],MouseEvent.CLICK,function():void
                  {
                     ToolTipManager.remove(_mapMV["mv"]["npc"]);
                     if(!canFightBoss)
                     {
                        Alarm.show("你的背包中还没有6只满级精灵哦！");
                     }
                     else
                     {
                        FightManager.fightNoMapBoss("",1119);
                     }
                  });
               });
            }
            else
            {
               AnimateManager.playMcAnimate(_mapMV,4,"mv",function():void
               {
                  leave();
               });
            }
         }
         else
         {
            NpcDialog.show(NPC.SUOLUOSENG,["这就是我暗黑魔君的实力！立刻离开我的领地！我是0xff0000不可被击败0xffffff的!"],["我一定会再来的!"],[function():void
            {
               leave();
            }]);
         }
      }
      
      private static function get canFightBoss() : Boolean
      {
         var _loc2_:PetListInfo = null;
         var _loc1_:Array = PetManager.getBagMap();
         if(_loc1_.length < 6)
         {
            return false;
         }
         for each(_loc2_ in _loc1_)
         {
            if(_loc2_.level < 100)
            {
               return false;
            }
         }
         return true;
      }
      
      private static function leave(param1:* = null) : void
      {
         KTool.showMapAllPlayerAndMonster(true);
         MapManager.currentMap.controlLevel["suolunsen"].visible = true;
         ToolTipManager.remove(_mapMV["bag"]);
         ToolTipManager.remove(_mapMV["leave_btn"]);
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         LevelManager.iconLevel.visible = true;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         DisplayUtil.removeForParent(_mapMV);
         _elm.clear();
         _elm = null;
         _mapMV = null;
         MainManager.selfVisible = true;
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         mcloader = new MCLoader(ClientConfig.getMapAnimate("suolunsen_pre_task"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var mapMv:MovieClip = null;
            var e:* = param1;
            MapManager.currentMap.controlLevel["suolunsen"].visible = false;
            mapMv = mcloader.loader.content["mv"];
            MapManager.currentMap.topLevel.addChild(mapMv);
            AnimateManager.playMcAnimate(mapMv,0,"",function():void
            {
               DisplayUtil.removeForParent(mapMv);
               MapManager.currentMap.controlLevel["suolunsen"].visible = true;
               BufferRecordManager.setMyState(1078,true);
               SocketConnection.send(1022,86070001);
            });
         });
         mcloader.doLoad();
      }
   }
}
