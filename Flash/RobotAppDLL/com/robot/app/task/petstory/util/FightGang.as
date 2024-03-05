package com.robot.app.task.petstory.util
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.OgreModel;
   import flash.display.MovieClip;
   import flash.geom.Point;
   import flash.utils.clearInterval;
   import flash.utils.setInterval;
   import org.taomee.debug.DebugTrace;
   import org.taomee.effect.ColorFilter;
   import org.taomee.utils.DisplayUtil;
   
   public class FightGang
   {
       
      
      private var InfoList:Array;
      
      private var OgreList:Array;
      
      private var nTime:uint;
      
      private var effectiveDistance:int;
      
      private var seerInfo:InfoNode;
      
      private var successHandler:Function;
      
      private var failedHandler:Function;
      
      private var isPlayEff:Boolean;
      
      public function FightGang(param1:int = 120, param2:int = 50, param3:int = 5)
      {
         super();
         this.InfoList = [];
         this.seerInfo = new InfoNode();
         this.seerInfo.id = 0;
         this.seerInfo.idx = 0;
         this.seerInfo.blood = param2;
         this.seerInfo.life = param2;
         this.seerInfo.attack = param3;
         this.effectiveDistance = param1;
      }
      
      public function createOgre(param1:int, param2:Point, param3:int = 10, param4:int = 5) : void
      {
         var _loc5_:InfoNode;
         (_loc5_ = new InfoNode()).id = param1;
         _loc5_.idx = this.InfoList.length + 1;
         _loc5_.point = param2;
         _loc5_.blood = param3;
         _loc5_.life = param3;
         _loc5_.attack = param4;
         this.InfoList.push(_loc5_);
      }
      
      public function beginFight() : FightGang
      {
         var _loc1_:OgreModel = null;
         var _loc2_:MovieClip = null;
         var _loc3_:InfoNode = null;
         this.OgreList = [];
         OgreController.isShow = true;
         ToolBarController.noticeAimat(true);
         MainManager.actorModel.filters = null;
         for each(_loc3_ in this.InfoList)
         {
            _loc3_.life = _loc3_.blood;
            _loc1_ = new OgreModel(_loc3_.idx);
            _loc1_.name = "ogre" + _loc3_.idx;
            _loc1_.isPurseFlag = true;
            _loc2_ = new Fight_blood();
            _loc1_.sprite.addChild(_loc2_);
            _loc2_.x -= 30;
            _loc2_.y -= _loc1_.height + 50;
            this.setBloodClipInfo(_loc2_,_loc3_.life,_loc3_.blood);
            _loc1_.show(_loc3_.id,_loc3_.point);
            this.OgreList.push(_loc1_);
         }
         if(this.OgreList.length > 0)
         {
            this.seerInfo.life = this.seerInfo.blood;
            _loc2_ = new Fight_blood();
            _loc2_.x -= 30;
            _loc2_.y -= MainManager.actorModel.height + 10;
            MainManager.actorModel.sprite.addChild(_loc2_);
            this.setBloodClipInfo(_loc2_,this.seerInfo.life,this.seerInfo.blood);
            AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
            this.nTime = setInterval(this.checkMonster,1000);
         }
         this.isPlayEff = false;
         return this;
      }
      
      private function getOrgeInfo(param1:OgreModel) : InfoNode
      {
         var _loc2_:InfoNode = null;
         for each(_loc2_ in this.InfoList)
         {
            if(param1.name == "ogre" + _loc2_.idx)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      private function getRotation(param1:Point, param2:Point) : Number
      {
         var _loc3_:Number = (param1.y - param2.y) / (param1.x - param2.x);
         var _loc4_:Number = 0;
         var _loc5_:Number = Math.abs(Math.atan(_loc3_) / (Math.PI / 180));
         var _loc6_:Number = Math.abs(Math.atan(_loc4_) / (Math.PI / 180));
         var _loc7_:Number = Math.abs(_loc5_ - _loc6_);
         if(param2.y <= param1.y)
         {
            if(param2.x <= param1.x)
            {
               _loc7_ += 180;
            }
            else
            {
               _loc7_ *= -1;
            }
         }
         else if(param2.x <= param1.x)
         {
            _loc7_ = 180 - _loc7_;
         }
         return _loc7_;
      }
      
      private function setBloodClipInfo(param1:MovieClip, param2:int, param3:int) : void
      {
         var _loc4_:uint = uint(101 - uint(100 * (param2 / param3)));
         param1.name = "bloodMc";
         param1["perMc"].gotoAndStop(_loc4_);
         param1["perTxt"].text = "" + param2 + "/" + param3;
      }
      
      private function checkMonster() : void
      {
         var _loc1_:Number = NaN;
         var _loc2_:MovieClip = null;
         var _loc3_:MovieClip = null;
         var _loc5_:OgreModel = null;
         var _loc6_:OgreModel = null;
         var _loc4_:MovieClip;
         if(_loc4_ = MainManager.actorModel.sprite.getChildByName("bloodMc") as MovieClip)
         {
            for each(_loc5_ in this.OgreList)
            {
               _loc1_ = Point.distance(_loc5_.pos,MainManager.actorModel.pos);
               if(_loc1_ <= this.effectiveDistance)
               {
                  if(_loc5_.sprite.getChildByName("killMc") == null)
                  {
                     _loc2_ = new Fight_kill();
                     _loc2_.name = "killMc";
                     _loc2_.rotation = this.getRotation(_loc5_.pos,MainManager.actorModel.pos);
                     _loc2_.y -= 40;
                     _loc5_.sprite.addChild(_loc2_);
                     if(MainManager.actorModel.sprite.getChildByName("hitsMc") == null)
                     {
                        _loc3_ = new Fight_hits();
                        _loc3_.name = "hitsMc";
                        _loc3_.y -= 10;
                        MainManager.actorModel.sprite.addChild(_loc3_);
                        this.seerInfo.life -= this.getOrgeInfo(_loc5_).attack;
                        if(this.seerInfo.life < 0)
                        {
                           this.seerInfo.life = 0;
                        }
                        this.setBloodClipInfo(_loc4_,this.seerInfo.life,this.seerInfo.blood);
                        if(this.seerInfo.life <= 0)
                        {
                           clearInterval(this.nTime);
                           this.nTime = 0;
                           DisplayUtil.removeForParent(_loc4_);
                           MainManager.actorModel.stopAutoWalk();
                           MainManager.actorModel.filters = [ColorFilter.setGrayscale()];
                           for each(_loc6_ in this.OgreList)
                           {
                              _loc6_.isPurseFlag = false;
                           }
                           DebugTrace.show("战斗失败");
                           this.stopFight();
                           if(this.failedHandler != null)
                           {
                              this.failedHandler();
                           }
                           return;
                        }
                     }
                  }
               }
            }
         }
      }
      
      private function onAimatEnd(param1:AimatEvent) : void
      {
         var _loc2_:OgreModel = null;
         DebugTrace.show("剩余对手个数：" + this.OgreList.length);
         for each(_loc2_ in this.OgreList)
         {
            if(_loc2_.hitTestPoint(param1.info.endPos.x,param1.info.endPos.y))
            {
               this.killMonster(_loc2_);
               break;
            }
         }
      }
      
      private function killMonster(param1:OgreModel) : void
      {
         var ogreInfo:InfoNode = null;
         var dispMc:MovieClip = null;
         var obj:OgreModel = param1;
         var bloodMc:MovieClip = obj.sprite.getChildByName("bloodMc") as MovieClip;
         if(bloodMc)
         {
            ogreInfo = this.getOrgeInfo(obj);
            if(ogreInfo.life > 0)
            {
               ogreInfo.life -= this.seerInfo.attack;
               if(ogreInfo.life < 0)
               {
                  ogreInfo.life = 0;
               }
               this.setBloodClipInfo(bloodMc,ogreInfo.life,ogreInfo.blood);
               if(ogreInfo.life <= 0 && this.isPlayEff == false)
               {
                  this.isPlayEff = true;
                  bloodMc.visible = false;
                  obj.isPurseFlag = false;
                  dispMc = new Fight_disp();
                  obj.sprite.addChild(dispMc);
                  AnimateManager.playMcAnimate(dispMc,0,"",function():void
                  {
                     OgreList.splice(OgreList.indexOf(obj),1);
                     obj.destroy();
                     isPlayEff = false;
                     if(OgreList.length == 0)
                     {
                        DebugTrace.show("战斗胜利");
                        stopFight();
                        if(successHandler != null)
                        {
                           successHandler();
                        }
                     }
                  },false,false);
               }
            }
         }
      }
      
      public function addResponse(param1:Function, param2:Function) : void
      {
         this.successHandler = param1;
         this.failedHandler = param2;
      }
      
      public function stopFight() : void
      {
         var _loc2_:OgreModel = null;
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         if(this.nTime > 0)
         {
            clearInterval(this.nTime);
            this.nTime = 0;
         }
         var _loc1_:MovieClip = MainManager.actorModel.sprite.getChildByName("bloodMc") as MovieClip;
         if(_loc1_)
         {
            DisplayUtil.removeForParent(_loc1_);
         }
         if(this.OgreList)
         {
            for each(_loc2_ in this.OgreList)
            {
               _loc2_.isPurseFlag = false;
               _loc2_.destroy();
            }
            this.OgreList.length = 0;
            this.OgreList = null;
         }
      }
      
      public function destroyFight() : void
      {
         this.stopFight();
         if(this.InfoList)
         {
            this.InfoList.length = 0;
            this.InfoList = null;
         }
         if(this.OgreList)
         {
            this.OgreList.length = 0;
            this.OgreList = null;
         }
         this.successHandler = null;
         this.failedHandler = null;
         this.seerInfo = null;
         MainManager.actorModel.filters = null;
         ToolBarController.noticeAimat(false);
         DebugTrace.show("战斗销毁");
      }
   }
}

import flash.geom.Point;

final class InfoNode
{
    
   
   public var idx:int;
   
   public var id:int;
   
   public var point:Point;
   
   public var blood:int;
   
   public var life:int;
   
   public var attack:int;
   
   public function InfoNode()
   {
      super();
   }
}
