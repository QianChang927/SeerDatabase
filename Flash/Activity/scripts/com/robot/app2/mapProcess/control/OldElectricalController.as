package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.AlertManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.components.EventComponent;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.BitmapDataChannel;
   import flash.display.BlendMode;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.ColorTransform;
   import flash.geom.Matrix;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class OldElectricalController
   {
      
      private static var _eraseRect:Rectangle = new Rectangle(0,0,30,30);
      
      private static var _currentEraseMt:Matrix = new Matrix();
      
      private static var _currentEraseRect:Rectangle = new Rectangle(0,0,30,30);
      
      private static var _maskBd:BitmapData;
      
      private static var _maskBm:Bitmap;
      
      private static var _maskSpr:Sprite;
      
      private static var _eraseIconBd:BitmapData;
      
      private static var _eraseIconBm:Bitmap;
      
      private static var _histogramRect:Rectangle = new Rectangle(20,20,190,400);
      
      private static var _getStatus:Boolean;
      
      private static var _fourBoss:Array = [];
      
      private static var _taskMc:MovieClip;
      
      private static var _mapAnimate:String = "Old_ElectricalKing_Animate";
      
      private static var curStep:int;
      
      private static var winCount:int;
      
      public static var curTask:int;
      
      private static var fightBigBoss:Boolean;
      
      private static var eventCom:EventComponent;
       
      
      private var _bitmapX:Number = 50;
      
      private var _bitmapY:Number = 50;
      
      private var _0pt:Point;
      
      public function OldElectricalController()
      {
         this._0pt = new Point();
         super();
      }
      
      private static function loadTaskMc(param1:Function, param2:uint = 1) : void
      {
         var fun:Function = param1;
         var frame:uint = param2;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      public static function initForMap() : void
      {
         BonusController.addDelay(1953);
         upDateData();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         loadTaskMc(function():void
         {
            MapNamePanel.hide();
            ToolBarController.panel.hide();
            KTool.showMapAllPlayerAndMonster(false);
            ToolBarController.showOrHideAllUser(false);
            LevelManager.iconLevel.visible = false;
            if(BitBuffSetClass.getState(23191 + curTask) == 0)
            {
               AnimateManager.playMcAnimate(_taskMc,curTask + 1,"mc",function():void
               {
                  outShow(true);
                  BitBuffSetClass.setState(23191 + curTask,1);
                  if(curTask == 0)
                  {
                     step0();
                  }
                  else if(curTask == 1)
                  {
                     step1();
                  }
                  else
                  {
                     step2();
                  }
                  upDateDataStep();
               });
            }
            else
            {
               outShow(true);
               if(curTask == 0)
               {
                  step0();
               }
               else if(curTask == 1)
               {
                  step1();
               }
               else
               {
                  KTool.getMultiValue([100515],function(param1:Array):void
                  {
                     if(curTask == 2 && param1[0] == 3)
                     {
                        outShow(false);
                     }
                     else
                     {
                        _taskMc.gotoAndStop(9);
                        step2();
                     }
                  });
               }
               upDateDataStep();
            }
         });
      }
      
      private static function step0(param1:Function = null) : void
      {
         _taskMc.gotoAndStop(7);
      }
      
      private static function step1(param1:Function = null) : void
      {
         AlertManager.showSimpleAlarm("希拉全部被石剑杀死，但是你却发现了一些不可思议的地方");
         _taskMc.gotoAndStop(8);
      }
      
      private static function step2(param1:Function = null) : void
      {
         var fun:Function = param1;
         NpcDialog.show(NPC.SEER,["你到底在说什么？！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.WHITESOUL,["应该这么说,你在这里所看到的一切电系精灵，全部都是我的能量，他们本来在远古的浩劫中死去，我把我的能量给了他们，让他们复活。可是，可是我的力量，却被称为石剑的雷剑也吸收了一部分。我想让它，还给我。！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SEER,["它.....肯还给你了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.WHITESOUL,["他，出现则不可被预测。元素诞生，则要面临着被摧毁，吞并，融合，我庆幸宇宙中，终于有一个精灵可以传承我的力量！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SEER,["那你的决定，是否还要......！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.WHITESOUL,["我当然，也是必须要苏醒。我还要帮他。帮他的伙伴！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["那么最后.....还需要什么？"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.WHITESOUL,["石剑的灵魂，就在我心里！赶走他最后的一点固执吧？"],["好！（进入对战）！","我感觉有点难，花钱通过吧（9钻）！","我再准备下！"],[function():void
                              {
                                 fightBigBoss = true;
                                 FightManager.fightNoMapBoss("",7223);
                              },function():void
                              {
                                 buyPassGate(247806,4);
                              }]);
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      private static function upDateDataStep(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([100525],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               _fourBoss[_loc2_] = KTool.getBit(param1[0],_loc2_ + 1);
               if(KTool.getBit(param1[0],_loc2_ + 1) > 0)
               {
                  if(Boolean(_taskMc["boss_" + _loc2_]) || (_taskMc as MovieClip).currentFrame == 7)
                  {
                     _taskMc["boss_" + _loc2_].visible = false;
                     _taskMc["tips_" + _loc2_].visible = false;
                  }
               }
               _loc2_++;
            }
         });
      }
      
      private static function outShow(param1:Boolean) : void
      {
         MainManager.selfVisible = param1;
         ToolBarController.showOrHideAllUser(param1);
         KTool.showMapAllPlayerAndMonster(param1);
      }
      
      private static function upDateData(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([100525],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 4)
            {
               _fourBoss[_loc2_] = KTool.getBit(param1[0],_loc2_ + 1);
               _loc2_++;
            }
         });
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var fightOver:FightOverInfo;
         var e:PetFightEvent = param1;
         KTool.getMultiValue([100515],function(param1:Array):void
         {
            var values:Array = param1;
            if(curTask == 0 && values[0] == 1)
            {
               outShow(false);
               AnimateManager.playMcAnimate(_taskMc,4,"mc",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     outShow(true);
                     ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                  });
               });
            }
            if(curTask == 2 && values[0] == 3)
            {
               outShow(false);
               AnimateManager.playMcAnimate(_taskMc,6,"mc",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     outShow(true);
                     ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                  });
               });
            }
         });
         fightOver = e.dataObj as FightOverInfo;
         if(fightOver.winnerID != MainManager.actorID)
         {
            NpcDialog.show(NPC.MOFUKE,["就这点本事？还不快滚！！"],["........"],[]);
         }
         upDateData();
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         index = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "startBtn":
               break;
            case "boss_0":
            case "boss_1":
            case "boss_2":
            case "boss_3":
               NpcDialog.show(NPC.MOFUKE,["你可千万不要小看了这个灵魂，他身上有强大的力量！"],["别闹了，快走！（进入战斗）！","花点小钱，打发他们（需消耗3钻石）！","嗯？关我什么事？"],[function():void
               {
                  FightManager.fightNoMapBoss("",7219 + index);
               },function():void
               {
                  buyPassGate(247805,index);
               }]);
               break;
            case "caoBtn":
               step2();
               break;
            case "whiteSoulBtn":
               break;
            case "shiJianBtn":
               AnimateManager.playMcAnimate(_taskMc,5,"mc",function():void
               {
                  KTool.doExchange(9002,function():void
                  {
                     MapManager.changeMapWithCallback(1,function():void
                     {
                        outShow(true);
                        ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                     });
                  });
               });
         }
      }
      
      private static function addMaskView() : void
      {
         initMask();
         initErase();
         initRect();
         eventCom = new EventComponent();
         eventCom.addMouseDownEvent(_taskMc.mouseMc,onStart);
      }
      
      private static function onStart(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(_taskMc.mouseMc);
         eventCom.removeEvent(_taskMc.maskCon,MouseEvent.MOUSE_DOWN,onStart);
         eventCom.addMouseDownEvent(_taskMc.maskCon,stageMouseDownHandler);
         eventCom.addMouseMoveEvent(_taskMc.maskCon,stageMouseMoveHandler);
         eventCom.addMouseUpEvent(_taskMc.maskCon,stageMouseUpHandler);
      }
      
      private static function initMask() : void
      {
         _maskBd = new BitmapData(214,468,true,13421772);
         _maskBd.noise(1,0,0,0,true);
         _maskBm = new Bitmap(_maskBd);
         _maskSpr = new Sprite();
         _maskSpr.addChild(_maskBm);
         _maskSpr.x = 382;
         _maskSpr.y = 48;
         _taskMc.maskCon.addChild(_maskSpr);
      }
      
      private static function initErase() : void
      {
         _eraseIconBd = new BitmapData(_eraseRect.width,_eraseRect.height,true,16711680);
         var _loc1_:BitmapData = new BitmapData(70,70);
         _loc1_.draw(_taskMc.bmp,null);
         _loc1_.noise(3,0,153,BitmapDataChannel.ALPHA);
         var _loc2_:Shape = new Shape();
         _loc2_.graphics.beginBitmapFill(_loc1_);
         _loc2_.graphics.drawRect(0,0,_eraseRect.width,_eraseRect.height);
         _loc2_.graphics.endFill();
         _eraseIconBd.draw(_loc2_);
         _eraseIconBd.colorTransform(_eraseRect,new ColorTransform(1,1,1,1,255,255,255));
         _eraseIconBm = new Bitmap(_eraseIconBd);
         _taskMc.maskCon.addChild(_eraseIconBm);
         _eraseIconBm.alpha = 1;
      }
      
      private static function initRect() : void
      {
         var _loc1_:Shape = new Shape();
         _loc1_.graphics.lineStyle(1,13369344);
         _loc1_.graphics.drawRect(_histogramRect.x,_histogramRect.y,_histogramRect.width,_histogramRect.height);
         _taskMc.maskCon.addChild(_loc1_);
         _loc1_.visible = false;
      }
      
      private static function stageMouseDownHandler(param1:MouseEvent) : void
      {
         erase();
      }
      
      private static function stageMouseMoveHandler(param1:MouseEvent) : void
      {
         _taskMc.penMc.x = _eraseIconBm.x = LevelManager.stage.mouseX - _eraseIconBm.width * 0.5;
         _taskMc.penMc.y = _eraseIconBm.y = LevelManager.stage.mouseY - _eraseIconBm.height * 0.5;
         if(param1.buttonDown)
         {
            erase();
         }
         param1.updateAfterEvent();
         judgeComplete();
      }
      
      private static function stageMouseUpHandler(param1:MouseEvent) : void
      {
         judgeComplete();
      }
      
      private static function erase() : void
      {
         _currentEraseMt.tx = _eraseIconBm.x - 382;
         _currentEraseMt.ty = _eraseIconBm.y - 48;
         _maskBd.draw(_eraseIconBm,_currentEraseMt,null,BlendMode.ERASE);
      }
      
      private static function judgeComplete() : void
      {
         var histogram:Vector.<Vector.<Number>> = _maskBd.histogram(_histogramRect);
         var transparentAmount:int = 0;
         var alphaVector:Vector.<Number> = histogram[3];
         var i:int = 0;
         while(i < 255)
         {
            transparentAmount += alphaVector[i] * (Math.sqrt(255 - i) * 15);
            i++;
         }
         if(transparentAmount > _histogramRect.width * _histogramRect.height * 192)
         {
            removeMask();
            Alarm2.show("看到了吗？这就是传说的石剑！奖励就送你啦！",function():void
            {
               clearMaskView();
               _getStatus = true;
               KTool.doExchange(9002,function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     outShow(true);
                     ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                  });
               });
            });
         }
      }
      
      private static function removeMask() : void
      {
         eventCom.removeEvent(_taskMc.maskCon,MouseEvent.MOUSE_DOWN,stageMouseDownHandler);
         eventCom.removeEvent(_taskMc.maskCon,MouseEvent.MOUSE_MOVE,stageMouseMoveHandler);
         eventCom.removeEvent(_taskMc.maskCon,MouseEvent.MOUSE_UP,stageMouseUpHandler);
      }
      
      private static function clearMaskView() : void
      {
         DisplayUtil.removeAllChild(_taskMc.maskCon);
         DisplayUtil.removeForParent(_taskMc.awardBtn);
         DisplayUtil.removeForParent(_taskMc.mouseMc);
         _maskBd = null;
         _maskBm = null;
         _maskSpr = null;
         _eraseIconBd = null;
         _eraseIconBm = null;
      }
      
      private static function buyPassGate(param1:uint, param2:int = 0) : void
      {
         var pid:uint = param1;
         var index:int = param2;
         KTool.buyProductByCallback(pid,1,function():void
         {
            KTool.doExchange(9007 + index,function():void
            {
               if(index < 4)
               {
                  KTool.getMultiValue([100515],function(param1:Array):void
                  {
                     var values:Array = param1;
                     if(curTask == 0 && values[0] == 1)
                     {
                        outShow(false);
                        AnimateManager.playMcAnimate(_taskMc,4,"mc",function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              outShow(true);
                              ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                           });
                        });
                     }
                  });
                  upDateDataStep();
               }
               else
               {
                  KTool.getMultiValue([100515],function(param1:Array):void
                  {
                     var values:Array = param1;
                     if(values[0] == 3)
                     {
                        AnimateManager.playMcAnimate(_taskMc,6,"mc",function():void
                        {
                           MapManager.changeMapWithCallback(1,function():void
                           {
                              outShow(true);
                              ModuleManager.showAppModule("OldElectricalElvenkingPanel");
                           });
                        });
                     }
                  });
               }
            });
         });
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         if(eventCom)
         {
            eventCom = null;
         }
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
         MainManager.selfVisible = true;
      }
   }
}
