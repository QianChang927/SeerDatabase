package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.sptStar.LeiyiController;
   import com.robot.app.sptStar.LeiyiTrainController;
   import com.robot.app.task.control.TaskController_130;
   import com.robot.app.task.taskscollection.Task568;
   import com.robot.app.task.taskscollection.Task570;
   import com.robot.app.task.taskscollection.Task572;
   import com.robot.app.task.taskscollection.Task641;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetListInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.PeopleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_32 extends BaseMapProcess
   {
      
      public static var hasPlayAi:Boolean = false;
       
      
      private var _rockMc:MovieClip;
      
      private var _rockBtn:MovieClip;
      
      public var _seerModel:PeopleModel;
      
      private var _leiyi_game:SimpleButton;
      
      private var riverMc:MovieClip;
      
      private var riverIndex:Number;
      
      private var ailison:MovieClip;
      
      private var ailisonIndex:Number;
      
      private var cloudSound:Sound;
      
      private var cloudChannel:SoundChannel;
      
      private var oneHitSound:Sound;
      
      private var oneSoundChannl:SoundChannel;
      
      private var twoHitSound:Sound;
      
      private var twoSoundChannel:SoundChannel;
      
      private var threeHitSound:Sound;
      
      private var threeSoundChannel:SoundChannel;
      
      private var mOgreIndex:int = 0;
      
      private var bloodBar:MovieClip;
      
      private var currentHitMC:MovieClip;
      
      private var hitCount:uint = 0;
      
      private var isHitedMC:MovieClip;
      
      private var allCount:uint = 0;
      
      public function MapProcess_32()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._leiyi_game = btnLevel["game_btn"];
         ToolTipManager.add(this._leiyi_game,"雷伊特训");
         this._leiyi_game.addEventListener(MouseEvent.CLICK,this.clickLeiYIgame);
         this._rockMc = conLevel.getChildByName("rockMc") as MovieClip;
         this._rockMc.gotoAndStop(1);
         this._rockMc.buttonMode = true;
         this._rockMc.mouseEnabled = false;
         this._rockMc.visible = false;
         this._rockBtn = conLevel.getChildByName("rockBtn") as MovieClip;
         this._rockBtn.buttonMode = true;
         this._rockBtn.mouseEnabled = false;
         this._rockBtn.visible = false;
         conLevel["bossBtn"].mouseEnabled = false;
         this.check();
         var _loc1_:UserInfo = new UserInfo();
         _loc1_.nick = "乌鸦";
         _loc1_.pos = new Point(342,322);
         _loc1_.clothes = [new PeopleItemInfo(100320),new PeopleItemInfo(100321),new PeopleItemInfo(100322),new PeopleItemInfo(100323)];
         this._seerModel = new PeopleModel(_loc1_);
         var _loc2_:TextField = this._seerModel.nameTxt;
         _loc2_.y += 15;
         var _loc3_:TextFormat = new TextFormat();
         _loc3_.size = 14 * 0.666;
         _loc3_.color = 255;
         _loc2_.setTextFormat(_loc3_);
         _loc2_.filters = [new GlowFilter(16777215,1,3,3,5)];
         this._seerModel.pos = new Point(340,340);
         this._seerModel.scaleX = 1.5;
         this._seerModel.scaleY = 1.5;
         this._seerModel.autoRect = new Rectangle(280,270,120,120);
         this._seerModel.removeEvent();
         this._seerModel.addEventListener(MouseEvent.CLICK,this.clickSeerHandelr);
         depthLevel.addChild(this._seerModel);
         if(TasksManager.getTaskStatus(130) != TasksManager.COMPLETE)
         {
            CommonUI.addYellowExcal(this._seerModel.parent,this._seerModel.x,this._seerModel.y - (this._seerModel.height + 50),1.5);
         }
         SocketConnection.send(1022,86068044);
         var _loc4_:PetShowInfo;
         (_loc4_ = new PetShowInfo()).petID = 284;
         this._seerModel.showPet(_loc4_);
         this._seerModel.pet.mouseChildren = false;
         this._seerModel.pet.mouseEnabled = false;
         var _loc5_:Shape;
         (_loc5_ = new Shape()).graphics.beginFill(0,1);
         _loc5_.graphics.drawRect(0,0,60,60);
         _loc5_.graphics.endFill();
         _loc5_.x = 240;
         _loc5_.y = 240;
         this.typeLevel.addChild(_loc5_);
         MapManager.currentMap.makeMapArray();
         btnLevel["cloud_mc"].visible = false;
         conLevel["task_122"].visible = false;
         conLevel["jiaLeiyi"].visible = false;
         conLevel["findItemMc"].visible = false;
         Task641.initTask_32(this);
         if(TasksManager.getTaskStatus(130) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(this._seerModel);
            DisplayUtil.removeForParent(btnLevel["cloud_mc"]);
         }
         if(TasksManager.getTaskStatus(641) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         Task572.initTask_32(this);
         if(TasksManager.getTaskStatus(572) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         Task570.initTask_32(this);
         if(TasksManager.getTaskStatus(570) == TasksManager.ALR_ACCEPT)
         {
            this._seerModel.visible = false;
            this._seerModel.pet.visible = false;
            return;
         }
         Task568.initTask_32(this);
         if(TasksManager.getTaskStatus(568) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         this.initTask130();
         if(TasksManager.getTaskStatus(130) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         this.initTask122();
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            if(this.mOgreIndex == 1)
            {
               Alarm.show("物攻学习力提升5点！精灵获得10000经验！!");
            }
            else if(this.mOgreIndex == 2)
            {
               Alarm.show("速度学习力提升5点！精灵获得10000经验！!");
            }
         }
      }
      
      private function onfightOgreResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(4553,this.onfightOgreResult);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         this.mOgreIndex = _loc2_.readUnsignedInt();
      }
      
      private function initTask122() : void
      {
         var pet:PetListInfo = null;
         var petInfo:PetInfo = null;
         var petArray:Array = PetManager.getBagMap();
         for each(pet in petArray)
         {
            if(pet.id == 70 || pet.id == 2394)
            {
               petInfo = PetManager.getPetInfo(pet.catchTime);
               PetManager.getCanStudySkill(petInfo.catchTime,function(param1:Array):void
               {
                  var skillArray:Array = param1;
                  if(skillArray.indexOf(10825) != -1)
                  {
                     DisplayUtil.removeForParent(conLevel["task_122"]);
                     conLevel["task_122"] = null;
                     DisplayUtil.removeForParent(conLevel["jiaLeiyi"]);
                     conLevel["jiaLeiyi"] = null;
                  }
                  else if(TasksManager.getTaskStatus(122) == TasksManager.UN_ACCEPT)
                  {
                     DisplayUtil.removeForParent(conLevel["task_122"]);
                     conLevel["task_122"] = null;
                     DisplayUtil.removeForParent(conLevel["jiaLeiyi"]);
                     conLevel["jiaLeiyi"] = null;
                  }
                  else if(TasksManager.getTaskStatus(122) == TasksManager.ALR_ACCEPT)
                  {
                     TasksManager.getProStatusList(122,function(param1:Array):void
                     {
                        if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
                        {
                           initTask_122();
                        }
                        else
                        {
                           DisplayUtil.removeForParent(conLevel["task_122"]);
                           conLevel["task_122"] = null;
                           DisplayUtil.removeForParent(conLevel["jiaLeiyi"]);
                           conLevel["jiaLeiyi"] = null;
                        }
                     });
                  }
                  else if(TasksManager.getTaskStatus(122) == TasksManager.COMPLETE)
                  {
                     initTask_122();
                  }
               });
               return;
            }
         }
         DisplayUtil.removeForParent(conLevel["task_122"]);
         conLevel["task_122"] = null;
         DisplayUtil.removeForParent(conLevel["jiaLeiyi"]);
         conLevel["jiaLeiyi"] = null;
      }
      
      private function initTask_122() : void
      {
         if(!hasPlayAi)
         {
            hasPlayAi = true;
            conLevel["task_122"].visible = true;
            AnimateManager.playMcAnimate(conLevel["task_122"],0,"",function():void
            {
               NpcDialog.show(NPC.GAIYA,["我不喜欢欠别人什么！既然你救了我一命，我就告诉你如何突破自己的极限！呵呵……"],["真正的敌人？自己？"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_122_1"),function():void
                  {
                     NpcDialog.show(NPC.GAIYA,["准备好作战了吗？呵呵……你能否打败自己呢？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["我一定可以战胜自己！我一定要完成于赫然卡星人的约定！无限的潜能必定会释放！"],["点击水银湖中的倒影吧！"],[function():void
                        {
                           conLevel["jiaLeiyi"].visible = true;
                           conLevel["jiaLeiyi"].buttonMode = true;
                           conLevel["jiaLeiyi"].addEventListener(MouseEvent.CLICK,onJiaLeiyiClick);
                        }]);
                     });
                  });
               }]);
            });
         }
         else
         {
            conLevel["jiaLeiyi"].visible = true;
            conLevel["jiaLeiyi"].buttonMode = true;
            conLevel["jiaLeiyi"].addEventListener(MouseEvent.CLICK,this.onJiaLeiyiClick);
         }
      }
      
      private function onJiaLeiyiClick(param1:MouseEvent) : void
      {
         var info:PetInfo;
         var e:MouseEvent = param1;
         if(PetManager.length == 0)
         {
            Alarm.show("你的背包中没有精灵哦！");
            return;
         }
         info = PetManager.getPetInfo(PetManager.defaultTime);
         if(info)
         {
            if(info.id != 70 && info.id != 2394)
            {
               NpcDialog.show(NPC.LEIYI_IMAGE,["怎么？怕了吗？雷伊！你只有靠自己的力量战胜自己，这才能释放潜能！"],["快将雷伊设为首选精灵，点击雷伊倒影决战吧！"]);
            }
            else
            {
               NpcDialog.show(NPC.LEIYI_IMAGE,["准备好就开战！少婆婆妈妈的！快点击水银湖中的我对战吧！"],["注意看水银湖！"],[function():void
               {
                  LeiyiTrainController.fightJiaLeiyi();
               }]);
            }
         }
      }
      
      private function initTask130(param1:Boolean = false) : void
      {
         var isClick:Boolean = param1;
         btnLevel["cloud_mc"].visible = true;
         if(TasksManager.getTaskStatus(TaskController_130.TASK_ID) == TasksManager.UN_ACCEPT && isClick)
         {
            NpcDialog.show(NPC.LEIYISEER,["哎呀！" + MainManager.actorInfo.formatNick + "，你怎么才来呀！你快看那朵奇怪的乌云！！你敢碰碰看吗？#7"],["快点击那朵奇怪的乌云看看！","我一会就过来！"],[function():void
            {
               TasksManager.accept(TaskController_130.TASK_ID,function(param1:Boolean):void
               {
                  var _loc2_:* = undefined;
                  if(param1)
                  {
                     TasksManager.setTaskStatus(TaskController_130.TASK_ID,TasksManager.ALR_ACCEPT);
                     _loc2_ = getDefinitionByName("com.robot.app.task.control::TaskController_" + TaskController_130.TASK_ID);
                     _loc2_.start();
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.CLICK,onCloudClick);
                     btnLevel["cloud_mc"].buttonMode = true;
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OVER,onOverHandler);
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OUT,onOutHandler);
                  }
                  else
                  {
                     Alarm.show("接受任务失败，请稍后再试！");
                  }
               });
            }]);
         }
         else if(TasksManager.getTaskStatus(TaskController_130.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_130.TASK_ID,function(param1:Array):void
            {
               var arr:Array = param1;
               if(isClick)
               {
                  if(!arr[0])
                  {
                     NpcDialog.show(NPC.LEIYISEER,["披着闪电的雷伊、驾着乌云的盖亚！你说谁才是真正的王者！！！我好期待哦！咦？#7那里好像有一朵奇怪的云！"],["快点击那朵奇怪的乌云看看！"],[]);
                     btnLevel["cloud_mc"].buttonMode = true;
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OVER,onOverHandler);
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OUT,onOutHandler);
                  }
                  if(Boolean(arr[1]) && !arr[2])
                  {
                     NpcDialog.show(NPC.LEIYISEER,[MainManager.actorInfo.formatNick + "，精灵是我们的伙伴不是吗？我们连自己的伙伴都保护不了……我真的很担心盖亚！#4"],["海盗们的阴谋究竟有多少！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["我相信我们一定会救出盖亚的！雷伊也一定会没事的！海盗！我们一定不会放过你！"],["海盗们！走着瞧！"],[function():void
                        {
                           TasksManager.complete(TaskController_130.TASK_ID,2);
                           CommonUI.removeYellowExcal(_seerModel.parent);
                           DisplayUtil.removeForParent(_seerModel);
                           LeiyiController.addPet();
                           DisplayUtil.removeForParent(btnLevel["cloud_mc"]);
                        }]);
                     }]);
                  }
               }
               else
               {
                  if(!arr[0])
                  {
                     btnLevel["cloud_mc"].buttonMode = true;
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.CLICK,onCloudClick);
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OVER,onOverHandler);
                     btnLevel["cloud_mc"].addEventListener(MouseEvent.ROLL_OUT,onOutHandler);
                  }
                  if(Boolean(arr[0]) && !arr[1])
                  {
                     btnLevel["cloud_mc"].visible = false;
                     animatorLevel["leyi_effect"].gotoAndStop(5);
                     AimatController.addEventListener(AimatEvent.PLAY_END,onAimatHandler);
                  }
                  if(Boolean(arr[1]) && !arr[2])
                  {
                     animatorLevel["leyi_effect"].gotoAndStop(6);
                     NpcDialog.show(NPC.LEIYISEER,[MainManager.actorInfo.formatNick + "，精灵是我们的伙伴不是吗？我们连自己的伙伴都保护不了……我真的很担心盖亚！#4"],["海盗们的阴谋究竟有多少！"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["我相信我们一定会救出盖亚的！雷伊也一定会没事的！海盗！我们一定不会放过你！"],["海盗们！走着瞧！"],[function():void
                        {
                           CommonUI.removeYellowExcal(_seerModel.parent);
                           TasksManager.complete(TaskController_130.TASK_ID,2);
                           DisplayUtil.removeForParent(_seerModel);
                           LeiyiController.addPet();
                           DisplayUtil.removeForParent(btnLevel["cloud_mc"]);
                        }]);
                     }]);
                  }
               }
            });
         }
         else
         {
            btnLevel["cloud_mc"].visible = false;
         }
      }
      
      private function onOverHandler(param1:MouseEvent) : void
      {
         btnLevel["cloud_mc"].gotoAndStop(2);
      }
      
      private function onOutHandler(param1:MouseEvent) : void
      {
         btnLevel["cloud_mc"].gotoAndStop(1);
      }
      
      private function onCloudClick(param1:MouseEvent) : void
      {
         var playMovie:Function = null;
         var e:MouseEvent = param1;
         playMovie = function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("lvsg"),function():void
            {
               NpcDialog.show(NPC.LEIYISEER,["哇哦！！！" + MainManager.actorInfo.formatNick + "，你看到没有！！雷伊获胜了！原来雷伊才是真正的王者！#8"],["快看！雷伊正朝盖亚走过去！"],[function():void
               {
                  AnimateManager.playMcAnimate(animatorLevel["leyi_effect"],3,"mc3",function():void
                  {
                     NpcDialog.show(NPC.SEER,["乌鸦！乌鸦！！！快看海盗飞船！！！不妙！怎么来了这么多海盗杂兵！他们难道是来抓……"],["盖亚！雷伊！小心啊！！！"],[function():void
                     {
                        AnimateManager.playMcAnimate(animatorLevel["leyi_effect"],4,"mc4",function():void
                        {
                           AnimateManager.playMcAnimate(animatorLevel["leyi_effect"],5,"mc5",function():void
                           {
                              NpcDialog.show(NPC.SEER,["#5把盖亚留下！！可恶！可恶！！！不许你们伤害盖亚！！！！乌鸦快用0xff0000头部射击0xffffff攻击那些海盗杂兵！！"],["可恶的海盗！"],[function():void
                              {
                                 TasksManager.complete(TaskController_130.TASK_ID,0,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       AimatController.addEventListener(AimatEvent.PLAY_END,onAimatHandler);
                                    }
                                 });
                              }]);
                           });
                        });
                     }]);
                  });
               }]);
            });
         };
         btnLevel["cloud_mc"].removeEventListener(MouseEvent.ROLL_OVER,this.onOverHandler);
         btnLevel["cloud_mc"].removeEventListener(MouseEvent.ROLL_OUT,this.onOutHandler);
         btnLevel["cloud_mc"].removeEventListener(MouseEvent.CLICK,this.onCloudClick);
         btnLevel["cloud_mc"].gotoAndStop(3);
         AnimateManager.playMcAnimate(animatorLevel["leyi_effect"],2,"mc2",function():void
         {
            NpcDialog.show(NPC.LEIYISEER,["哇哇哇！！！雷伊和盖亚！我们又见面啦！啊哈哈哈！" + MainManager.actorInfo.formatNick + "，你说这次他们会分出胜负吗？谁才是王者呢？"],["雷伊可是天下无敌的！！！","我觉得盖亚才是王者！"],[function():void
            {
               NpcDialog.show(NPC.LEIYISEER,["哼！我觉得盖亚很有可能获胜！你不觉得他超级帅吗！！#6盖亚！盖亚！加油！加油！"],["雷伊！加油加油！！！"],[playMovie]);
            },function():void
            {
               NpcDialog.show(NPC.LEIYISEER,["你真没眼光！我觉得雷伊天生就拥有王者的气质！哈哈哈！！雷伊！！你是我的偶像！#8加油啊！！"],["盖亚！你可不能逊色咯！！！"],[playMovie]);
            }]);
         });
      }
      
      private function controlBloodBar(param1:int = 0, param2:int = 1, param3:Boolean = false) : void
      {
         var _loc5_:Point = null;
         if(param3)
         {
            if(this.bloodBar)
            {
               DisplayUtil.removeForParent(this.bloodBar);
               this.bloodBar = null;
            }
            this.bloodBar = MapManager.currentMap.libManager.getMovieClip("BloodBar");
            this.bloodBar["barMC"].gotoAndStop(1);
            if((_loc5_ = this.currentHitMC.localToGlobal(new Point(0,0))).x > 700)
            {
               this.bloodBar.x = _loc5_.x - this.bloodBar.width / 2;
            }
            else
            {
               this.bloodBar.x = _loc5_.x;
            }
            this.bloodBar.y = _loc5_.y - 20;
            conLevel.addChild(this.bloodBar);
         }
         var _loc4_:int = int(this.bloodBar["barMC"].currentFrame);
         param1 *= param2;
         this.bloodBar["barMC"].gotoAndStop(_loc4_ + param1);
         if(this.bloodBar["barMC"].currentFrame >= this.bloodBar["barMC"].totalFrames)
         {
            DisplayUtil.removeForParent(this.bloodBar);
         }
      }
      
      private function onAimatHandler(param1:AimatEvent) : void
      {
         var p:Point;
         var id:uint;
         var mc:MovieClip;
         var i:uint = 0;
         var t1:uint = 0;
         var t2:uint = 0;
         var e:AimatEvent = param1;
         if(MainManager.actorID != e.info.userID)
         {
            return;
         }
         p = e.info.endPos;
         id = uint(e.info.id);
         mc = animatorLevel["leyi_effect"]["mc5"];
         if(mc)
         {
            i = 0;
            while(i < 3)
            {
               this.isHitedMC = mc["haidao_" + i];
               if(this.isHitedMC)
               {
                  if(this.isHitedMC.hitTestPoint(p.x,p.y))
                  {
                     if(this.currentHitMC)
                     {
                        if(this.currentHitMC != this.isHitedMC)
                        {
                           this.currentHitMC = this.isHitedMC;
                           this.controlBloodBar(8,1,true);
                           this.hitCount = 0;
                        }
                     }
                     else
                     {
                        this.currentHitMC = this.isHitedMC;
                        this.controlBloodBar(8,1,true);
                        this.hitCount = 0;
                     }
                     this.currentHitMC.gotoAndStop(2);
                     t1 = setTimeout(function():void
                     {
                        if(currentHitMC)
                        {
                           currentHitMC.gotoAndStop(1);
                        }
                        clearTimeout(t1);
                     },1000);
                     ++this.hitCount;
                     this.controlBloodBar(8,1);
                     if(this.hitCount == 1)
                     {
                        ++this.allCount;
                        if(this.allCount == 3)
                        {
                           DebugTrace.show("海盗被全部击毙，哈哈。。。");
                           animatorLevel["leyi_effect"].gotoAndStop(6);
                           TasksManager.complete(TaskController_130.TASK_ID,1,function(param1:Boolean):void
                           {
                              var b1:Boolean = param1;
                              if(b1)
                              {
                                 NpcDialog.show(NPC.LEIYISEER,["怎么办！我们没能救出盖亚！可恶的艾里逊！！也不知道受伤的雷伊怎么了……" + MainManager.actorInfo.formatNick + "！我心里好难受!#4"],["不知道海盗会怎么对盖亚……"],[function():void
                                 {
                                    _seerModel.showBox("#4");
                                 }]);
                              }
                           });
                        }
                        this.hitCount = 0;
                        DisplayUtil.removeForParent(this.bloodBar);
                        this.bloodBar = null;
                        this.currentHitMC.gotoAndStop(3);
                        t2 = setTimeout(function():void
                        {
                           DisplayUtil.removeForParent(currentHitMC);
                           currentHitMC = null;
                           clearTimeout(t2);
                        },500);
                     }
                  }
               }
               i++;
            }
         }
      }
      
      private function clickSeerHandelr(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(568) == TasksManager.ALR_ACCEPT)
         {
            return;
         }
         if(TasksManager.getTaskStatus(568) == TasksManager.COMPLETE)
         {
            if(TasksManager.getTaskStatus(130) == TasksManager.COMPLETE)
            {
               NpcDialog.show(NPC.LEIYISEER,["小赛尔，雷神已经把卡兔带走了，相信在雷神的帮助下卡兔一定能很快康复的，在这段时间里雷神会在每天的整点都会出现哦！"],["太好了，我知道了！"]);
               return;
            }
         }
         LeiyiController.hide();
         this.initTask130(true);
      }
      
      public function hitLY() : void
      {
         if(MapManager.currentMap.id == 32)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightManager.fightWithBoss("雷伊",6);
         }
      }
      
      private function check() : void
      {
         if(TasksManager.getTaskStatus(401) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatus(401,1,function(param1:Boolean):void
            {
               if(!param1)
               {
                  _rockMc.mouseEnabled = true;
                  _rockMc.visible = true;
                  _rockBtn.mouseEnabled = true;
                  _rockBtn.visible = true;
               }
            });
         }
      }
      
      private function clickLeiYIgame(param1:MouseEvent) : void
      {
         LeiyiTrainController.showTrainPanel();
      }
      
      override public function destroy() : void
      {
         Task570.destory();
         Task568.destory();
         Task572.destory();
         LeiyiTrainController.destory();
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatHandler);
         if(this.cloudChannel)
         {
            this.cloudChannel.stop();
            this.cloudChannel = null;
         }
         if(this.oneSoundChannl)
         {
            this.oneSoundChannl.stop();
            this.oneSoundChannl = null;
         }
         if(this.twoSoundChannel)
         {
            this.twoSoundChannel.stop();
            this.twoSoundChannel = null;
         }
         if(this.threeSoundChannel)
         {
            this.threeSoundChannel.stop();
            this.threeSoundChannel = null;
         }
         ToolTipManager.remove(this._leiyi_game);
         this._leiyi_game.removeEventListener(MouseEvent.CLICK,this.clickLeiYIgame);
         this._leiyi_game = null;
         this._seerModel.destroy();
         this._rockMc.removeEventListener(MouseEvent.CLICK,this.onMusicClick);
         this._rockMc = null;
         this._rockBtn = null;
         if(conLevel["jiaLeiyi"])
         {
            conLevel["jiaLeiyi"].removeEventListener(MouseEvent.CLICK,this.onJiaLeiyiClick);
         }
      }
      
      private function onMusicClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!MainManager.actorModel.getIsPetFollw(22) && !MainManager.actorModel.getIsPetFollw(23) && !MainManager.actorModel.getIsPetFollw(24))
         {
            Alarm.show("只有带上你的<font color=\'#ff0000\'>毛毛</font>，这些音符才会起到作用呢。");
            return;
         }
         TasksManager.complete(401,1,function(param1:Boolean):void
         {
            _rockMc.removeEventListener(MouseEvent.CLICK,onMusicClick);
            if(param1)
            {
               DisplayUtil.removeForParent(_rockMc);
               Alarm.show("你帮助毛毛找到了一个音符！");
            }
         });
      }
      
      public function onRockHit() : void
      {
         DisplayUtil.removeForParent(this._rockBtn);
         this._rockMc.gotoAndStop(2);
         this._rockMc.addEventListener(MouseEvent.CLICK,this.onMusicClick);
      }
      
      public function onbossHit() : void
      {
         if(MapManager.currentMap.id == 32)
         {
            getDefinitionByName("com.robot.app2.control.DeepseaLightWarriorController").setup();
            FightManager.fightWithBoss("雷伊",6);
         }
      }
   }
}
