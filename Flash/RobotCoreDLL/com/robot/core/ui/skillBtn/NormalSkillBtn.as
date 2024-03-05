package com.robot.core.ui.skillBtn
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Point;
   import org.taomee.utils.DisplayUtil;
   
   public class NormalSkillBtn extends Sprite
   {
       
      
      public var skillID:uint;
      
      private var _mc:MovieClip;
      
      private var _currentPP:int;
      
      private var _petInfo:PetInfo;
      
      private var _hasMarkEffect:Boolean;
      
      public function NormalSkillBtn(param1:uint = 0, param2:int = -1)
      {
         super();
         this._mc = this.getMC();
         this._mc.gotoAndStop(1);
         this._mc["iconMC"].gotoAndStop(1);
         this._mc["nameTxt"].mouseEnabled = false;
         this._mc["migTxt"].mouseEnabled = false;
         this._mc["ppTxt"].mouseEnabled = false;
         addChild(this._mc);
         this.init(param1,param2);
      }
      
      public function get petInfo() : PetInfo
      {
         return this._petInfo;
      }
      
      public function set petInfo(param1:PetInfo) : void
      {
         this._petInfo = param1;
         this._hasMarkEffect = false;
         this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.abilityMark,this.skillID);
         if(!this._hasMarkEffect)
         {
            this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.skillMark,this.skillID);
         }
         if(!this._hasMarkEffect && Boolean(this._petInfo.commonMarkActived))
         {
            this._hasMarkEffect = this.isHaveSkillEffect(this._petInfo.commonMark,this.skillID);
         }
         if(this._hasMarkEffect)
         {
            this._mc.filters = [new GlowFilter(16711680)];
         }
         else
         {
            this._mc.filters = [];
         }
      }
      
      private function isHaveSkillEffect(param1:int, param2:int) : Boolean
      {
         var _loc3_:* = undefined;
         if(CountermarkXMLInfo.isUniversalMark(param1))
         {
            _loc3_ = ItemManager.getUniversalMarkInfo(param1);
            if(_loc3_ && _loc3_.bindMonID == this._petInfo.id && _loc3_.bindMoveID == param2)
            {
               return true;
            }
         }
         if(CountermarkXMLInfo.isQuanxiaoMark(param1))
         {
            if(CountermarkXMLInfo.getSkillArr(CountermarkXMLInfo.getQuanxiaoSkillID(param1)).indexOf(param2) > -1)
            {
               return true;
            }
         }
         if(CountermarkXMLInfo.isSkillMark(param1))
         {
            if(CountermarkXMLInfo.getSkillArr(param1).indexOf(param2) > -1)
            {
               return true;
            }
         }
         return false;
      }
      
      protected function getMC() : MovieClip
      {
         return UIManager.getMovieClip("ui_Normal_PetSkilBtn");
      }
      
      public function init(param1:uint, param2:int = -1) : void
      {
         this.skillID = param1;
         this._currentPP = param2;
         if(this.skillID <= 0)
         {
            return;
         }
         this._mc["nameTxt"].text = SkillXMLInfo.getName(param1);
         var _loc3_:uint = SkillXMLInfo.getTypeID(param1);
         var _loc4_:SimpleButton = UIManager.getButton("Icon_PetType_" + _loc3_);
         if(SkillXMLInfo.getCategory(param1) == 4)
         {
            _loc4_ = UIManager.getButton("Icon_PetType_prop");
         }
         if(_loc4_)
         {
            DisplayUtil.removeAllChild(this._mc["iconMC"]);
            this._mc["iconMC"].addChild(_loc4_);
            _loc4_.scaleX = _loc4_.scaleY = 0.8;
            CommonUI.centerAlign(_loc4_,_loc4_.parent as Sprite,new Point(0,0));
         }
         this._mc["migTxt"].text = "威力:" + SkillXMLInfo.getDamage(param1).toString();
         var _loc5_:String = SkillXMLInfo.getPP(param1).toString();
         if(param2 == -1)
         {
            this._mc["ppTxt"].text = "PP:" + _loc5_ + "/" + _loc5_;
         }
         else
         {
            this._mc["ppTxt"].text = "PP:" + param2.toString() + "/" + _loc5_;
         }
         addEventListener(MouseEvent.ROLL_OVER,this.overHandler);
         addEventListener(MouseEvent.ROLL_OUT,this.outHandler);
      }
      
      public function get mc() : MovieClip
      {
         return this._mc;
      }
      
      public function setSelect(param1:Boolean) : void
      {
         if(param1)
         {
            this._mc.gotoAndStop(2);
         }
         else
         {
            this._mc.gotoAndStop(1);
         }
      }
      
      public function clear() : void
      {
         this._mc["iconMC"].gotoAndStop(1);
         this._mc["nameTxt"].text = "";
         this._mc["migTxt"].text = "";
         this._mc["ppTxt"].text = "";
         removeEventListener(MouseEvent.ROLL_OVER,this.overHandler);
         removeEventListener(MouseEvent.ROLL_OUT,this.outHandler);
      }
      
      public function destroy() : void
      {
         this.clear();
         DisplayUtil.removeForParent(this);
         this._mc = null;
      }
      
      private function overHandler(param1:MouseEvent) : void
      {
         if(Boolean(this.petInfo) && this._hasMarkEffect)
         {
            SkillInfoTip.showPetInfoTip(this.petInfo,this.skillID);
         }
         else
         {
            if(this.petInfo)
            {
               if(PetXMLInfo.isCombinationBonusPet(this.petInfo.id))
               {
                  SkillInfoTip.showAdditionInfo(this.petInfo,this.skillID);
               }
               SkillInfoTip.showPetInfoTip(this.petInfo,this.skillID);
            }
            else
            {
               SkillInfoTip.show(this.skillID);
            }
            this._mc.filters = [];
         }
      }
      
      private function outHandler(param1:MouseEvent) : void
      {
         SkillInfoTip.hide();
      }
   }
}
