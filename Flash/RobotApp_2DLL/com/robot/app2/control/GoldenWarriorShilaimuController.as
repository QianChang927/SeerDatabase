package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class GoldenWarriorShilaimuController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function GoldenWarriorShilaimuController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ToolTipManager.add(MovieClip(_map.conLevel["mcFlashKing"]),"闪耀吧！黄金战士！");
         ToolTipManager.add(MovieClip(_map.conLevel["mcShilaimuKing"]),"闪耀吧！黄金战士！");
         if(!BitBuffSetClass.getState(22438))
         {
            MovieClip(_map.conLevel["mcFlashKing"]).buttonMode = true;
            MovieClip(_map.conLevel["mcShilaimuKing"]).buttonMode = true;
            getMc(function(param1:MovieClip):void
            {
               taskMC = param1;
               _map.conLevel["mcShilaimuKing"].addEventListener(MouseEvent.CLICK,onClickHandler);
               _map.conLevel["mcFlashKing"].addEventListener(MouseEvent.CLICK,onClickFlashKingHandler);
            });
         }
         else
         {
            initShilaimu();
         }
      }
      
      private static function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         var _loc1_:Array = [1157,1158,16,17];
         var _loc2_:Array = [new Point(120,430),new Point(313,218),new Point(200,460),new Point(60,370)];
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            _loc4_.show(_loc1_[_loc3_],_loc2_[_loc3_]);
            _loc3_++;
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         if(_loc2_.id == 1157)
         {
            FightManager.fightWithBoss("小尾蝶",0);
         }
         else if(_loc2_.id == 1158)
         {
            FightManager.fightWithBoss("彩翼蝶",1);
         }
         else if(_loc2_.id == 16)
         {
            FightManager.fightWithBoss("仙人球",2);
         }
         else if(_loc2_.id == 17)
         {
            FightManager.fightWithBoss("仙人掌",3);
         }
      }
      
      private static function onClickFlashKingHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IvokeEternalKingMainPanel"));
      }
      
      private static function initShilaimu() : void
      {
         addBoss();
         _map.conLevel["mcFlashKing"].visible = true;
         _map.conLevel["mcShilaimuKing"].visible = true;
         _map.conLevel["mcShilaimuKing"].addEventListener(MouseEvent.CLICK,showDialog);
         _map.conLevel["mcFlashKing"].addEventListener(MouseEvent.CLICK,onClickFlashKingHandler);
         _map.conLevel["btnShilaimu"].addEventListener(MouseEvent.CLICK,onClickShilaimuHandler);
         CommonUI.addYellowExcal(_map.conLevel,_map.conLevel["btnShilaimu"].x,_map.conLevel["btnShilaimu"].y - 50,0);
      }
      
      private static function onClickShilaimuHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(983);
      }
      
      private static function onClickHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(46133,3);
         _map.conLevel["mcFlashKing"].visible = false;
         _map.conLevel["mcShilaimuKing"].visible = false;
         _map.conLevel["btnShilaimu"].visible = false;
         _map.conLevel["mcShilaimuKing"].removeEventListener(MouseEvent.CLICK,onClickHandler);
         _map.conLevel["mcFlashKing"].removeEventListener(MouseEvent.CLICK,onClickHandler);
         taskMC.buttonMode = false;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         _map.btnLevel.addChild(taskMC);
         playPreStory();
      }
      
      private static function showDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(46133,3);
         NpcDialog.show(NPC.SHILAIMU_KING,["0xff0000" + MainManager.actorInfo.nick + "0xffffff你也一起参加吧！帮助我通过闪光史莱姆王的永恒试炼好吗？"],["恩，我很乐意参加！","参加次元穿梭者！闪光史莱姆国王 ","让我先准备一下！"],[function():void
         {
            showPanel();
         },function():void
         {
            MapManager.changeMap(966);
         }]);
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            SocketConnection.send(1022,86073390);
            _map.depthLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            BitBuffSetClass.setState(22438,1);
            DisplayUtil.removeForParent(taskMC);
            _map.conLevel["btnShilaimu"].visible = true;
            showPanel();
            initShilaimu();
         });
      }
      
      private static function showPanel(param1:* = null) : void
      {
         SocketConnection.send(46133,3);
         ModuleManager.showModule(ClientConfig.getAppModule("GoldenWarriorShilaimuMianPanel"));
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         var _loc3_:String = "20140319_55";
         var _loc4_:String = "cartoon/goldenwarrior";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc1"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["哥哥…感谢你的及时赶到，否则恐怕已经不能站在这里和你见面了！"],["还记得我们的誓言吗？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc2"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["只要永恒星遇到困难…哦，不…只要永恒国度遇到任何危及，你都会及时出现！"],["恩恩，你还知道我们的使命吗？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["当然知道！誓死保卫永恒国度和永恒石！"],["但是结果呢？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["结果你把永恒国度弄成现在这个样子了，你觉得自己惭愧吗？"],["对不起…哥哥！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.CARTOON,0,null,null,[_loc4_]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["都是我的错，由于我的逞能，没有能好好守护永恒之树，害的永恒之王都变成石像！"],["都是我的错！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["够了！！！作为一名战士，难道面对困难你只会哭泣吗？我们史莱姆一族向来都是骁勇善战的，收起你的眼泪吧！"],["哦…我知道了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc3"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["亲爱的弟弟，知错能改才是王道，相信这次的教训一定会让你体会不少，但是当务之急还是要提升自己的实力！"],["哥哥…你会帮助我吗？！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc4"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHILAIMU_KING,["哦哦…知道了，那我们开始吧！"],["你准备好了？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["如果你能经过我的试炼，那我才能再次把永恒国度交给你，否则…！"],["没问题，如果我不能通过，我就不当国王了"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["有这样的勇气还是远远不够的，要的是你的实力，拿出你的真本事吧！"],["就在这里击倒我！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc5"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ShANGUANGSHILAIMUKING,["很好，时间不多了，让我们开始史莱姆一族的永恒试炼吧！"],["哥哥…让我们一起加油吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc6"]));
         return _loc1_;
      }
      
      private static function getMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(taskMC)
         {
            fun(taskMC);
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_966_1"),function(param1:MovieClip):void
            {
               taskMC = param1;
               fun(taskMC);
            });
         }
      }
      
      private static function set taskMC(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _taskMc;
      }
      
      public static function destroy() : void
      {
      }
   }
}
