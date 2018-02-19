// containers/MathContainer.js
import { connect } from 'react-redux'
import Math from '../components/Math'
import { getNum } from '../selectors/math'
import { getFetchMessage, getFetchIsShow } from '../selectors/fetch'
import { setNum, add, square } from '../actions/math'
const mapStateToProps = state => ({
  num: getNum(state),
  fetchMessage: getFetchMessage(state),
  isShow: getFetchIsShow(state)
})
const mapDispatchToProps = {
  onSetNumClick: () => setNum(),
  onAddOneClick: () => add(1),
  onAddTwoClick: () => add(2),
  onSqureClick: () => square
}
const MathContainer = connect(mapStateToProps, mapDispatchToProps)(Math)
export default MathContainer
