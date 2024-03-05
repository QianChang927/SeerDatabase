package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LeiyiPreHotController
   {
      
      private static var taskMc:MovieClip;
      
      private static var petMc:MovieClip;
      
      private static var _curIndex:int;
      
      private static var _map:BaseMapProcess;
      
      private static var myMc:MovieClip;
      
      private static const showMapList:Array = [1,5,4,103];
      
      private static const mapPonts:Array = [[480,190],[650,360],[420,300],[270,500]];
       
      
      public function LeiyiPreHotController()
      {
         super();
      }
      
      public static function openCompletBodyPanel() : void
      {
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == 10947)
         {
            KTool.getMultiValue([2448],function(param1:Array):void
            {
               if(param1[0] == 0)
               {
                  ModuleManager.showAppModule("LeiyiCompleteBodyMainPanel");
               }
               else
               {
                  ModuleManager.showAppModule("LeiyiCompleteBodyMainPanel2");
               }
            });
         }
         else
         {
            MapManager.changeMap(10947);
         }
      }
      
      public static function start() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,loadPet);
      }
      
      public static function onClickEq() : void
      {
         StatManager.sendStat2014("0902雷伊完全体预热","点击小屋中装置",StatManager.RUN_ACT_2015);
         ModuleManager.showAppModule("LeiyiPreHotMainPanel");
      }
      
      private static function loadPet(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(showMapList.indexOf(MapManager.currentMap.id) < 1)
         {
            return;
         }
         _curIndex = showMapList.indexOf(MapManager.currentMap.id);
         if(petMc)
         {
            initPet();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getPetSwfPath(2394),function(param1:MovieClip):void
            {
               petMc = param1;
               initPet();
            },"pet");
         }
      }
      
      private static function initPet() : void
      {
         petMc.x = mapPonts[_curIndex][0];
         petMc.y = mapPonts[_curIndex][1];
         petMc.buttonMode = petMc.mouseEnabled = true;
         MapManager.currentMap.controlLevel.addChild(petMc);
         petMc.addEventListener(MouseEvent.CLICK,onClick);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,destroyPet);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         StatManager.sendStat2014("0902雷伊完全体预热","点击" + MapManager.currentMap.id + "号场景NPC",StatManager.RUN_ACT_2015);
         NpcDialog.show(NPC.LEIYI_EVO,["亲爱的赛尔，0xff00009月11日，我就能进化成为完全体形态了！0xffffff我为大家准备了很多礼物，现在你就可以去参与了哦！"],["我要获得奖励！","9月11日，我们不见不散！"],[function():void
         {
            ModuleManager.showAppModule("LeiyiPreHotMainPanel");
         }]);
      }
      
      private static function destroyPet(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,destroyPet);
         if(petMc)
         {
            petMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(petMc);
         }
      }
      
      public static function loginMovie(param1:Function) : void
      {
         var fun:Function = param1;
         if(BitBuffSetClass.getState(22877) == 0)
         {
            BitBuffSetClass.setState(22877,1);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("LeiyiCompleteBodyFullMovie"),function():void
            {
               fun();
            });
         }
         else
         {
            fun();
         }
      }
      
      public static function startPlayLoginMovie() : void
      {
         if(BitBuffSetClass.getState(22876) == 0)
         {
            BitBuffSetClass.setState(22876,1);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("LeiyiCompleteBodyFullMovie2"));
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         AnimateManager.playMcAnimate(_map.topLevel["mc"],1,"mc",function():void
         {
            myMc = _map.topLevel["mc"];
            myMc["mc"].gotoAndStop(myMc["mc"].totalFrames);
            myMc["mc"].addEventListener(MouseEvent.CLICK,onFightDialog);
            KTool.getMultiValue([6468],function(param1:Array):void
            {
               var _loc4_:* = false;
               var _loc2_:int = 0;
               var _loc3_:int = 0;
               while(_loc3_ < 4)
               {
                  if(_loc4_ = BitUtils.getBit(param1[0],1 + _loc3_) > 0)
                  {
                     _loc2_++;
                  }
                  myMc["mc"]["flag_" + _loc3_].visible = !_loc4_;
                  myMc["mc"]["btn_" + _loc3_].visible = !_loc4_;
                  _loc3_++;
               }
               if(_loc2_ == 4 && BitUtils.getBit(param1[0],0) > 0)
               {
                  ModuleManager.showAppModule("LeiyiYuyueCompletePanel");
               }
            });
         });
      }
      
      private static function onFightDialog(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var e:MouseEvent = param1;
         if(e.target.name.indexOf("btn_") > -1)
         {
            index = uint(e.target.name.split("_")[1]);
            switch(index)
            {
               case 0:
                  NpcDialog.show(NPC.ZHAN_SHEN_GAI_YA,["用力量证明你有资格获得这些贵重的宝物吧！"],["证明给你看！","我准备一下！"],[function():void
                  {
                     StatManager.sendStat2014("0902雷伊完全体氛围预热预约大礼包","点击战神盖亚并开始挑战",StatManager.RUN_ACT_2015);
                     FightManager.fightNoMapBoss("",5033);
                  }]);
                  break;
               case 1:
                  NpcDialog.show(NPC.KAXIUSI_SUPER,["雷伊终于也要突破了，真的很开心啊！就让我们一起用战斗开启雷伊突破的前奏吧！"],["战斗！","我准备一下！"],[function():void
                  {
                     StatManager.sendStat2014("0902雷伊完全体氛围预热预约大礼包","点击大地之神卡修斯并开始挑战",StatManager.RUN_ACT_2015);
                     FightManager.fightNoMapBoss("",5034);
                  }]);
                  break;
               case 2:
                  NpcDialog.show(NPC.BULAIKE_EVO,["我希望雷伊的宝物能交给最英勇的小赛尔，希望他能永远守护赛尔号！"],["让你看看我是最英勇的！","我准备一下！"],[function():void
                  {
                     StatManager.sendStat2014("0902雷伊完全体氛围预热预约大礼包","点击夜魔之神布莱克并开始挑战",StatManager.RUN_ACT_2015);
                     FightManager.fightNoMapBoss("",5035);
                  }]);
                  break;
               case 3:
                  NpcDialog.show(NPC.CHITONGMIUSI,["虽然我很想把宝物直接交给你，但按规矩，还是要看一下你的实力！"],["看看我的实力吧！","我准备一下！"],[function():void
                  {
                     StatManager.sendStat2014("0902雷伊完全体氛围预热预约大礼包","点击赤瞳缪斯并开始挑战",StatManager.RUN_ACT_2015);
                     FightManager.fightNoMapBoss("",5036);
                  }]);
            }
         }
      }
      
      private static function destroy() : void
      {
         if(taskMc)
         {
            DisplayUtil.removeForParent(taskMc);
            taskMc = null;
         }
      }
      
      public static function destroyForMap() : void
      {
         if(_map && _map.topLevel && Boolean(myMc))
         {
            myMc["mc"].addEventListener(MouseEvent.CLICK,onFightDialog);
            _map = null;
         }
      }
   }
}
