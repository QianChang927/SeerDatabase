package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.BufferRecordManager;
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
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ShinePetsVSShadowPetsController extends ActivityControl
   {
       
      
      private var _map:BaseMapProcess;
      
      private var _timer:Timer;
      
      private var _model:Array;
      
      private var _currentModel:OgreModel;
      
      private var _pet1:Array;
      
      private var npcDia:Array;
      
      private var petsName:Array;
      
      private var preFight:Boolean;
      
      public function ShinePetsVSShadowPetsController(param1:Array)
      {
         this._pet1 = [[164,164,164,164,164,164,164],[164,164,164,164,164,284,1248],[164,164,164,164,442,1500,1333],[164,164,164,164,409,1248,1333]];
         this.npcDia = [NPC.SHANGUANG_PIPI,NPC.SHANGUANGLILI,NPC.SHANGUANG_YIYI,NPC.SHANGUANG_GELIN,NPC.SHANGUANG_XINGJILA,NPC.SHANGUANGGUODONGYA,NPC.SHANGUANGMAIKERUI];
         this.petsName = ["闪光皮皮","闪光利利","闪光依依","闪光格林","闪光阿兹","闪光果冻鸭","闪光迈迈","迪迪","波拉","莫格","黑格","格尔基","哈罗威","德库拉"];
         super(param1);
      }
      
      public function setup(param1:BaseMapProcess) : void
      {
         this._map = param1;
         CommonUI.addYellowArrow(this._map.conLevel["board"],48,-120,45);
         if(!BufferRecordManager.getMyState(1033))
         {
            ToolTipManager.add(this._map.conLevel["board"],"新春狂欢派对-闪光联盟VS暗影联盟");
            this._map.conLevel["board"].addEventListener(MouseEvent.CLICK,this.doPre);
         }
         else
         {
            this.start();
         }
      }
      
      private function showPanel(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86068510);
         CommonUI.removeYellowArrow(this._map.conLevel["board"]);
         ModuleManager.showModule(ClientConfig.getAppModule("ShinePetsVSShadowPetsPanel"),"正在打开面板....");
      }
      
      private function doPre(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         this._map.conLevel["board"].removeEventListener(MouseEvent.CLICK,this.doPre);
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_943_1"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            _map.conLevel.addChild(mc);
            _map.conLevel["board"].visible = false;
            NpcDialog.show(NPC.SHANGUANG_PIPI,[MainManager.actorInfo.formatNick + "，你终于来了！德库拉率领暗黑精灵大举进攻我们！你一定要帮助我们啊！"],["我一定会帮助你们的！","我妈妈喊我写作业！"],[function():void
            {
               SocketConnection.send(1022,86068508);
               AnimateManager.playMcAnimate(mc,1,"mc1",function():void
               {
                  NpcDialog.show(NPC.DEKULA,["想跑？哼！现在就把你们的闪光能量全部收集起来！到时候我们不就拥有暗影能量，还能控制闪光能量啦！"],["哈哈！"],[function():void
                  {
                     NpcDialog.show(NPC.GEERDUN,["想想就让人兴奋啊！喂，我说" + MainManager.actorInfo.formatNick + "，你快让开！不要阻碍我们的狂欢派对！"],["可恶！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["我绝对不会允许你们在这里欺负闪光精灵的！"],["那要看看你的本事了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(mc,2,"mc2",function():void
                           {
                              NpcDialog.show(NPC.DEKULA,["来得正好！闪光精灵到齐啦！该是我们表演的时候了！"],["住手！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["我一定不会让你的阴谋得逞的！"],["哼！不识抬举！"],[function():void
                                 {
                                    NpcDialog.show(NPC.GEERDUN,["看来得给你点颜色看看啦！"],["你们要做什么？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(mc,3,"mc3",function():void
                                       {
                                          NpcDialog.show(NPC.SHANGUANGMAIKERUI,[MainManager.actorInfo.formatNick + "，不要怕！他们就隐藏在我们中间！你一定要把他们赶走！"],["放心吧！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SHANGUANGMAIKERUI,[MainManager.actorInfo.formatNick + "，如果遇到的是我们，那么你就带走我们。让我们成为你的小伙伴！"],["好的！我一定会胜利的！"],[function():void
                                             {
                                                _map.conLevel["board"].visible = true;
                                                BufferRecordManager.setMyState(1033,true);
                                                SocketConnection.send(1022,86068509);
                                                DisplayUtil.removeForParent(mc);
                                                KTool.showMapAllPlayerAndMonster();
                                                start();
                                             }]);
                                          }]);
                                       });
                                    }]);
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            },function():void
            {
               _map.conLevel["board"].visible = true;
               DisplayUtil.removeForParent(mc);
               KTool.showMapAllPlayerAndMonster();
               start();
            }]);
         },"item");
      }
      
      private function start() : void
      {
         ToolTipManager.add(this._map.conLevel["board"],"新春狂欢派对-闪光联盟VS暗影联盟");
         this._map.conLevel["board"].addEventListener(MouseEvent.CLICK,this.showPanel);
         this._timer = new Timer(20000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
         this.onTimer(null);
         MapManager.addEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:Array = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:Point = null;
         var _loc8_:OgreModel = null;
         this.destroy(false);
         if(super.isInActivityTime)
         {
            OgreController.isShow = false;
            _loc2_ = OgreXMLInfo.getOgreList(943).concat();
            this._model = [];
            if((_loc4_ = Math.floor(Math.random() * 100)) < 60)
            {
               _loc3_ = this._pet1[0];
            }
            else if(_loc4_ >= 60 && _loc4_ < 78)
            {
               _loc3_ = this._pet1[1];
            }
            else if(_loc4_ >= 78 && _loc4_ < 88)
            {
               _loc3_ = this._pet1[2];
            }
            else if(_loc4_ >= 88 && _loc4_ < 100)
            {
               _loc3_ = this._pet1[3];
            }
            else
            {
               _loc3_ = this._pet1[0];
            }
            OgreModel.isShow = true;
            _loc5_ = 0;
            while(_loc5_ < 7)
            {
               _loc6_ = Math.floor(Math.random() * _loc2_.length);
               _loc7_ = _loc2_[_loc6_];
               _loc2_.splice(_loc6_,1);
               (_loc8_ = new OgreModel(_loc5_ + 10000)).name = PetXMLInfo.getName(_loc3_[_loc5_]);
               _loc8_.show(_loc3_[_loc5_],_loc7_);
               _loc8_.addEventListener(MouseEvent.CLICK,this.onOgreClick);
               this._model.push(_loc8_);
               _loc5_++;
            }
            OgreModel.isShow = false;
         }
         else
         {
            OgreController.isShow = true;
         }
      }
      
      private function onOgreClick(param1:MouseEvent) : void
      {
         this._currentModel = param1.currentTarget as OgreModel;
         MainManager.actorModel.walkAction(this._currentModel.pos);
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
      }
      
      private function onEnter(param1:RobotEvent) : void
      {
         var r:uint = 0;
         var e:RobotEvent = param1;
         if(this.preFight)
         {
            return;
         }
         if(this._currentModel != null)
         {
            if(Point.distance(MainManager.actorModel.pos,this._currentModel.pos) < 20)
            {
               switch(this._currentModel.id)
               {
                  case 164:
                     r = 1;
                     break;
                  case 284:
                     r = 2;
                     break;
                  case 442:
                     r = 3;
                     break;
                  case 409:
                     r = 4;
                     break;
                  case 1500:
                     r = 5;
                     break;
                  case 1248:
                     r = 6;
                     break;
                  case 1333:
                     r = 7;
               }
               SocketConnection.sendWithCallback(CommandID.SHINE_PARTY_FIGHT,function(param1:SocketEvent):void
               {
                  var result:int = 0;
                  var e:SocketEvent = param1;
                  var by:ByteArray = e.data as ByteArray;
                  by.position = 0;
                  result = by.readInt();
                  if(result - 597 == r)
                  {
                     NpcDialog.show(npcDia[r - 1],[MainManager.actorInfo.formatNick + "，你真聪明！你会带我走，让我成为你的小伙伴吗？"],["好的！我们一起庆祝新春派对！"],[function():void
                     {
                        FightManager.fightNoMapBoss(petsName[result - 598],result);
                     }]);
                  }
                  else if(r == 7)
                  {
                     NpcDialog.show(NPC.DEKULA,[MainManager.actorInfo.formatNick + "，真不走运！我要让你见识见识我们暗影系精灵的厉害！小伙伴们，给他点颜色看看！ "],["我不会怕你们！"],[function():void
                     {
                        FightManager.fightNoMapBoss(petsName[result - 598],result);
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.GEERDUN,[MainManager.actorInfo.formatNick + "，真不走运！我要让你见识见识我们暗影系精灵的厉害！小伙伴们，给他点颜色看看！ "],["我不会怕你们！"],[function():void
                     {
                        FightManager.fightNoMapBoss(petsName[result - 598],result);
                     }]);
                  }
               },r);
               this.preFight = true;
            }
         }
      }
      
      private function onMapDown(param1:MapEvent) : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
      }
      
      public function destroy(param1:Boolean = true) : void
      {
         var _loc2_:OgreModel = null;
         if(param1)
         {
            OgreController.isShow = true;
            if(this._map)
            {
               ToolTipManager.remove(this._map.conLevel["board"]);
               this._map.conLevel["board"].removeEventListener(MouseEvent.CLICK,this.showPanel);
               this._map.conLevel["board"].removeEventListener(MouseEvent.CLICK,this.doPre);
               this._map = null;
            }
            ModuleManager.destroy(ClientConfig.getAppModule("ShinePetsVSShadowPetsPanel"));
            if(this._timer)
            {
               this._timer.stop();
               this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
               this._timer == null;
            }
            MapManager.removeEventListener(MapEvent.MAP_MOUSE_DOWN,this.onMapDown);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onEnter);
         }
         if(this._model != null)
         {
            for each(_loc2_ in this._model)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,this.onOgreClick);
               _loc2_.destroy();
               _loc2_ = null;
            }
         }
         this._model = null;
      }
   }
}
